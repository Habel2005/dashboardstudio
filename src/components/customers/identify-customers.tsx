'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { getPromisingCustomers } from '@/app/(main)/customers/actions';
import { Sparkles, Loader2 } from 'lucide-react';
import { IdentifyPromisingCustomersOutput } from '@/ai/flows/identify-promising-customers';
import { useToast } from '@/hooks/use-toast';

export function IdentifyCustomers() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<IdentifyPromisingCustomersOutput | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleIdentify = () => {
    startTransition(async () => {
      const response = await getPromisingCustomers();
      if (response.success && response.data) {
        setResult(response.data);
        setIsOpen(true);
      } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: response.error,
        })
      }
    });
  };

  return (
    <>
      <Button onClick={handleIdentify} disabled={isPending}>
        {isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4" />
        )}
        Identify Promising Customers
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-headline flex items-center gap-2">
              <Sparkles className="text-primary" />
              Promising Customers
            </DialogTitle>
            <DialogDescription>
              AI-powered analysis of your customer data.
            </DialogDescription>
          </DialogHeader>
          {result && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Analysis Summary</h3>
                <p className="text-sm text-muted-foreground">
                  {result.analysisSummary}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Identified Customers</h3>
                <ul className="list-disc list-inside space-y-1 rounded-md bg-muted p-4 text-sm">
                  {result.promisingCustomers.map((customer) => (
                    <li key={customer}>{customer}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
