import React from "react";
import { ChevronDown } from "lucide-react";
import { Period, VisibleSeries } from "../../types";

interface ChartControlsProps {
  period: Period;
  setPeriod: (period: Period) => void;
  visibleSeries: VisibleSeries;
  toggleSeries: (series: keyof VisibleSeries) => void;
}

export const ChartControls = ({
  period,
  setPeriod,
  visibleSeries,
  toggleSeries,
}: ChartControlsProps) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = React.useState(false);
  const filterRef = React.useRef<HTMLDivElement>(null);
  const periodRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!filterRef.current?.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
      if (!periodRef.current?.contains(event.target as Node)) {
        setIsPeriodOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-4">
      <div ref={filterRef} className="relative">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Filter
          <ChevronDown className="w-4 h-4" />
        </button>
        {isFilterOpen && (
          <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
            <div className="p-2">
              <label className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                <input
                  type="checkbox"
                  checked={visibleSeries.revenue}
                  onChange={() => toggleSeries("revenue")}
                  className="mr-2"
                />
                Revenue
              </label>
              <label className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                <input
                  type="checkbox"
                  checked={visibleSeries.profit}
                  onChange={() => toggleSeries("profit")}
                  className="mr-2"
                />
                Profit
              </label>
            </div>
          </div>
        )}
      </div>

      <div ref={periodRef} className="relative">
        <button
          onClick={() => setIsPeriodOpen(!isPeriodOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          {period}
          <ChevronDown className="w-4 h-4" />
        </button>
        {isPeriodOpen && (
          <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
            <div className="py-1">
              {["1 min", "5 mins", "30 mins", "1 day"].map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPeriod(p as Period);
                    setIsPeriodOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
