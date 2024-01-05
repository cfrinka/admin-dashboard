'use client'
import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,  
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    visits: 2654,
    clicks: 1253,
  },
  {
    name: "Tues",
    visits: 6545,
    clicks: 1456,
  },
  {
    name: "Wed",
    visits: 9632,
    clicks: 4252,
  },
  {
    name: "Thur",
    visits: 8521,
    clicks: 1258,
  },
  {
    name: "Fri",
    visits: 7412,
    clicks: 2147,
  },
];

function Chart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background: "#151c2c", border:"none"}} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
