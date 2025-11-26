'use server';

import { identifyPromisingCustomers } from '@/ai/flows/identify-promising-customers';
import { customers } from '@/lib/data';

export async function getPromisingCustomers() {
  try {
    const customerDataString = JSON.stringify(
      customers.map((c) => ({
        id: c.id,
        lifetimeValue: c.ltv,
        status: c.status,
        interactionSummary: c.interaction_history,
        engagement: c.engagement_score,
      }))
    );

    const result = await identifyPromisingCustomers({
      customerData: customerDataString,
      criteria: "Prioritize customers with high engagement scores and positive interaction history, who are currently 'Active' or 'Lead'.",
    });

    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to identify promising customers.' };
  }
}
