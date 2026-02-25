"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockStats } from "@/lib/mockData";

export default function StatPanel() {
  const [stats, setStats] = useState(mockStats);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        operations: prev.operations + Math.floor(Math.random() * 3),
        assets: prev.assets + Math.floor(Math.random() * 2),
        channels: prev.channels,
        threat: Math.max(0, Math.min(100, prev.threat + (Math.random() > 0.7 ? 5 : -3))),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0B0F14] border border-[#9F8750] p-4">
      <h2 className="text-xs uppercase text-[#9F8750] mb-4">Operational Status</h2>

      <div className="grid grid-cols-2 gap-4">
        <Stat label="Active Ops" value={stats.operations} />
        <Stat label="Global Assets" value={stats.assets} />
        <Stat label="Secure Channels" value={stats.channels} />
        <ThreatLevel value={stats.threat} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <motion.div
      className="border border-[#9F8750] p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-xs text-[#6B7280] uppercase">{label}</p>
      <p className="text-lg text-[#E5E7EB]">{value}</p>
    </motion.div>
  );
}

function ThreatLevel({ value }: { value: number }) {
  const color =
    value > 70 ? "#5E0B12" : value > 40 ? "#9F8750" : "#1F5133";

  return (
    <motion.div
      className="border border-[#9F8750] p-3"
      style={{ borderColor: color }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      <p className="text-xs text-[#6B7280] uppercase">Threat Level</p>
      <p className="text-lg" style={{ color }}>
        {Math.round(value)}%
      </p>
    </motion.div>
  );
}
