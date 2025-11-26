import { RecentSales } from "@/components/dashboard/recent-sales";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { revenueData, recentSales } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-headline text-3xl font-bold tracking-tight">
        Dashboard
      </h1>
      <StatsCards />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <RevenueChart data={revenueData} />
        </div>
        <div className="lg:col-span-3">
          <RecentSales sales={recentSales} />
        </div>
      </div>
    </div>
  );
}
