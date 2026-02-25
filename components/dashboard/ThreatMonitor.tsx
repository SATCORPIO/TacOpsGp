import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import { mockThreat } from "@/lib/mockData";

export default function ThreatMonitor() {
  const [data, setData] = useState(mockThreat);

  useEffect(() => {
    const interval = setInterval(() => {
      setData([{ ...data[0], value: Math.random() * 100 }]);
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="bg-[#0B0F14] border border-[#9F8750] p-4">
      <h2 className="text-xs uppercase text-[#9F8750] mb-4">Threat Monitor</h2>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="20%" outerRadius="90%" data={data}>
            <RadialBar
              dataKey="value"
              background
              cornerRadius={0}
              fill="#5E0B12"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
