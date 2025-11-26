import { Leaf } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 p-2">
      <Leaf className="h-6 w-6 text-primary" />
      <h1 className="font-headline text-xl font-bold group-data-[collapsible=icon]:hidden">
        Evergreen ERP
      </h1>
    </div>
  );
}
