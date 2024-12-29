import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartData, VisibleSeries } from "../../types";

interface AnalyticsChartProps {
  data: ChartData[];
  maxValue: number;
  visibleSeries: VisibleSeries;
}

export const AnalyticsChart = ({
  data,
  maxValue,
  visibleSeries,
}: AnalyticsChartProps) => {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="timestamp"
            tick={{ fill: "#6B7280" }}
            tickLine={{ stroke: "#6B7280" }}
            interval={Math.floor(data.length / 10)}
          />
          <YAxis
            domain={[0, maxValue]}
            tick={{ fill: "#6B7280" }}
            tickLine={{ stroke: "#6B7280" }}
            tickFormatter={(value) => `$${value}`}
            ticks={[0, maxValue]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value) => [`$${value}`, ""]}
          />
          {visibleSeries.revenue && (
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: "#3B82F6", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          )}
          {visibleSeries.profit && (
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: "#10B981", strokeWidth: 2 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
