import CommandHeader from "@/components/dashboard/CommandHeader";
import StatPanel from "@/components/dashboard/StatPanel";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import OperationsMap from "@/components/dashboard/OperationsMap";
import ThreatMonitor from "@/components/dashboard/ThreatMonitor";
import IntelligenceChart from "@/components/dashboard/IntelligenceChart";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-[#E5E7EB]">
      <CommandHeader />

      <main className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="space-y-4">
          <StatPanel />
        </section>

        <section className="space-y-4">
          <ActivityFeed />
        </section>

        <section className="space-y-4">
          <ThreatMonitor />
        </section>
      </main>

      <section className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <IntelligenceChart />
        <OperationsMap />
      </section>
    </div>
  );
}
