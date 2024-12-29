import { useState } from "react";
import { Period, VisibleSeries } from "../../types";

export const useChartFilters = () => {
  const [period, setPeriod] = useState<Period>("1 min");
  const [visibleSeries, setVisibleSeries] = useState<VisibleSeries>({
    revenue: true,
    profit: true,
  });

  const toggleSeries = (series: keyof VisibleSeries) => {
    setVisibleSeries((prev) => ({
      ...prev,
      [series]: !prev[series],
    }));
  };

  return {
    period,
    setPeriod,
    visibleSeries,
    toggleSeries,
  };
};
