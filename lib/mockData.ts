export const mockStats = {
  operations: 42,
  assets: 128,
  channels: 16,
  threat: 35,
};

export const mockActivity = [
  {
    id: 1,
    message: "INTEL LINK ESTABLISHED",
    timestamp: new Date().toLocaleTimeString(),
  },
];

export const mockThreat = [{ name: "Threat", value: 35 }];

export const mockTrend = Array.from({ length: 10 }).map((_, i) => ({
  time: `${i}:00`,
  value: Math.random() * 100,
}));
