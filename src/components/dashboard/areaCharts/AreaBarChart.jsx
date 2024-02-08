import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);

  const data = [
    { name: "Men", value: 120 },
    { name: "Women", value: 110 },
  ];

  const COLORS = ["#0088FE", "#FFBB28"];

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <div className="info-data-value">216</div>
        <div className="info-data-change">
          <FaArrowUpLong />
          <p>+20%</p>
        </div>
      </div>
      <div className="gender-info">
        <p className="gender">120 Men</p>
        <p className="gender">110 Women</p>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={formatTooltipValue} cursor={{ fill: "transparent" }} />
            <Legend formatter={formatLegendValue} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
