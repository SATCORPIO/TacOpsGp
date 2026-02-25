export const dynamic = "force-dynamic";

import CommandHeader from "@/components/dashboard/CommandHeader";
import StatPanel from "@/components/dashboard/StatPanel";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import ThreatMonitor from "@/components/dashboard/ThreatMonitor";
import IntelligenceChart from "@/components/dashboard/IntelligenceChart";
import OperationsMap from "@/components/dashboard/OperationsMap";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-[#E5E7EB] relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative z-10 p-6 space-y-6">
        <CommandHeader />

        {/* Top Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <StatPanel />
          <ActivityFeed />
          <ThreatMonitor />
        </section>

        {/* Bottom Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IntelligenceChart />
          <OperationsMap />
        </section>
      </div>
    </main>
  );
}
