import { useState, useEffect } from "react";
import { ChartData, Period } from "../../types";
import { generateMockData } from "../../utils/mockData";

export const useChartData = (period: Period) => {
  const [data, setData] = useState<ChartData[]>([]);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    const mockData = generateMockData(period);
    setData(mockData);

    const max = Math.max(...mockData.flatMap((d) => [d.revenue, d.profit]));
    setMaxValue(Math.ceil(max / 1000) * 1000);
  }, [period]);

  return { data, maxValue };
};
