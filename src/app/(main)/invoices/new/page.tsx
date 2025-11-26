import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { customers } from "@/lib/data";
import { Leaf, PlusCircle, Trash2 } from "lucide-react";

export default function NewInvoicePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          New Invoice
        </h1>
        <div className="flex gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button>Create and Send Invoice</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="customer">Select Customer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id}>
                          {customer.name} - {customer.company}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Invoice Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="invoice-date">Invoice Date</Label>
                  <Input id="invoice-date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="due-date">Due Date</Label>
                  <Input id="due-date" type="date" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="h-full">
            <CardHeader className="bg-muted/50 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-headline">Invoice Preview</CardTitle>
                <CardDescription>INV-006</CardDescription>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Leaf className="h-6 w-6" />
                <span className="font-headline text-xl font-bold">Evergreen ERP</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
               <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold">Billed To</h3>
                    <p className="text-sm text-muted-foreground">Innovate Inc.</p>
                    <p className="text-sm text-muted-foreground">123 Business Rd.</p>
                    <p className="text-sm text-muted-foreground">Suite 456, City, State 78910</p>
                  </div>
                   <div className="text-right">
                    <h3 className="font-semibold">Invoice Date</h3>
                    <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</p>
                    <h3 className="font-semibold mt-2">Due Date</h3>
                    <p className="text-sm text-muted-foreground">In 30 days</p>
                   </div>
               </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="w-[100px]">Qty</TableHead>
                    <TableHead className="w-[120px] text-right">Price</TableHead>
                    <TableHead className="w-[120px] text-right">Total</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Input placeholder="Item description" />
                    </TableCell>
                    <TableCell>
                      <Input type="number" defaultValue="1" className="text-center" />
                    </TableCell>
                    <TableCell>
                      <Input type="number" placeholder="0.00" className="text-right" />
                    </TableCell>
                     <TableCell className="text-right font-medium">$0.00</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon"><Trash2 className="size-4 text-muted-foreground" /></Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button variant="outline" className="w-full">
                <PlusCircle className="mr-2 size-4" /> Add Item
              </Button>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6 flex flex-col items-end space-y-2">
                <div className="flex justify-between w-full max-w-xs">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$0.00</span>
                </div>
                 <div className="flex justify-between w-full max-w-xs">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span>$0.00</span>
                </div>
                 <div className="flex justify-between w-full max-w-xs font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>$0.00</span>
                </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
