"use client";

import { useEffect, useState } from "react";
import { mockActivity } from "@/lib/mockData";

export default function ActivityFeed() {
  const [feed, setFeed] = useState(mockActivity);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeed((prev) => [
        {
          id: Date.now(),
          message: `INTEL UPDATE: ${Math.random()
            .toString(36)
            .substring(2, 10)
            .toUpperCase()}`,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 9),
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0B0F14] border border-[#9F8750] p-4 h-full">
      <h2 className="text-xs uppercase text-[#9F8750] mb-3">
        Live Activity Feed
      </h2>

      <div className="space-y-2">
        {feed.map((item) => (
          <div
            key={item.id}
            className="border-l-2 border-[#9F8750] pl-2 text-sm"
          >
            <span className="text-[#6B7280] text-xs">{item.timestamp}</span>
            <p className="text-[#E5E7EB] uppercase">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
