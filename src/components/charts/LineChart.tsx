import { Activity } from "lucide-react";
import { AnalyticsChart } from "./AnalyticsChart";
import { ChartControls } from "./ChartControls";
import { useChartData } from "./useChartData";
import { useChartFilters } from "./useChartFilters";

export const LineChartContainer = () => {
  const { period, setPeriod, visibleSeries, toggleSeries } = useChartFilters();
  const { data, maxValue } = useChartData(period);

  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            Financial Performance
          </h2>
        </div>
        <ChartControls
          period={period}
          setPeriod={setPeriod}
          visibleSeries={visibleSeries}
          toggleSeries={toggleSeries}
        />
      </div>

      <AnalyticsChart
        data={data}
        maxValue={maxValue}
        visibleSeries={visibleSeries}
      />

      <div className="mt-4 text-sm text-gray-600">
        <p>Financial metrics for the last {period}</p>
      </div>
    </div>
  );
};
