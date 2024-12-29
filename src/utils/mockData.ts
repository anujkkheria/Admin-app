import { ChartData, Period } from "../types";

const getTimeInterval = (period: Period): number => {
  switch (period) {
    case "1 min":
      return 60000; // 1 minute in milliseconds
    case "5 mins":
      return 300000; // 5 minutes
    case "30 mins":
      return 1800000; // 30 minutes
    case "1 day":
      return 86400000; // 24 hours
    default:
      return 60000;
  }
};

const formatTimestamp = (date: Date, period: Period): string => {
  if (period === "1 day") {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export const generateMockData = (period: Period): ChartData[] => {
  const now = new Date();
  const data: ChartData[] = [];
  const interval = getTimeInterval(period);

  for (let i = 0; i < 100; i++) {
    const timestamp = new Date(now.getTime() - (99 - i) * interval);
    data.push({
      timestamp: formatTimestamp(timestamp, period),
      revenue: Math.random() * 10000,
      profit: Math.random() * 5000,
    });
  }

  return data;
};
