import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface RecentSale {
  id: string;
  name: string;
  email: string;
  amount: number;
  avatar: string;
  imageHint: string;
}

interface RecentSalesProps {
  sales: RecentSale[];
}

export function RecentSales({ sales }: RecentSalesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {sales.map((sale) => (
            <div key={sale.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={sale.avatar}
                  alt="Avatar"
                  data-ai-hint={sale.imageHint}
                />
                <AvatarFallback>
                  {sale.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{sale.name}</p>
                <p className="text-sm text-muted-foreground">{sale.email}</p>
              </div>
              <div className="ml-auto font-medium">
                +${sale.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
