'use server';
/**
 * @fileOverview This file defines a Genkit flow to identify promising customers based on revenue potential,
 * sentiment analysis of past interactions, and historical engagement.
 *
 * - identifyPromisingCustomers - A function that triggers the flow to identify promising customers.
 * - IdentifyPromisingCustomersInput - The input type for the identifyPromisingCustomers function.
 * - IdentifyPromisingCustomersOutput - The return type for the identifyPromisingCustomers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifyPromisingCustomersInputSchema = z.object({
  customerData: z.string().describe('A comprehensive dataset of customer information, including revenue, interaction history, and engagement metrics.'),
  criteria: z.string().optional().describe('Optional criteria to filter and prioritize customers, such as minimum revenue or interaction frequency.'),
});
export type IdentifyPromisingCustomersInput = z.infer<typeof IdentifyPromisingCustomersInputSchema>;

const IdentifyPromisingCustomersOutputSchema = z.object({
  promisingCustomers: z.array(z.string()).describe('A list of customer IDs or names identified as promising based on the analysis.'),
  analysisSummary: z
    .string()
    .describe('A summary of the analysis performed, including key factors that influenced the identification of promising customers.'),
});
export type IdentifyPromisingCustomersOutput = z.infer<typeof IdentifyPromisingCustomersOutputSchema>;

export async function identifyPromisingCustomers(input: IdentifyPromisingCustomersInput): Promise<IdentifyPromisingCustomersOutput> {
  return identifyPromisingCustomersFlow(input);
}

const identifyPromisingCustomersPrompt = ai.definePrompt({
  name: 'identifyPromisingCustomersPrompt',
  input: {schema: IdentifyPromisingCustomersInputSchema},
  output: {schema: IdentifyPromisingCustomersOutputSchema},
  prompt: `You are an AI assistant designed to analyze customer data and identify promising customers for a business.

  Your analysis should consider factors like revenue potential, sentiment analysis of past interactions, and historical engagement.
  Based on the provided customer data, identify the customers who are most likely to generate significant revenue or value for the business.

  Customer Data: {{{customerData}}}

  Optional Criteria: {{{criteria}}}

  Output:
  - promisingCustomers: A list of customer IDs or names identified as promising.
  - analysisSummary: A summary of the analysis performed, including the factors used to identify promising customers.
  \n`,
});

const identifyPromisingCustomersFlow = ai.defineFlow(
  {
    name: 'identifyPromisingCustomersFlow',
    inputSchema: IdentifyPromisingCustomersInputSchema,
    outputSchema: IdentifyPromisingCustomersOutputSchema,
  },
  async input => {
    const {output} = await identifyPromisingCustomersPrompt(input);
    return output!;
  }
);
