import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useState, useEffect } from "react";
import { mockTrend } from "@/lib/mockData";

export default function IntelligenceChart() {
  const [data, setData] = useState(mockTrend);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [
        ...prev.slice(1),
        {
          time: new Date().toLocaleTimeString(),
          value: Math.random() * 100,
        },
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0B0F14] border border-[#9F8750] p-4">
      <h2 className="text-xs uppercase text-[#9F8750] mb-4">
        Intelligence Trend
      </h2>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" hide />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#9F8750"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
