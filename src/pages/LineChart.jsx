import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "14 Jan",
    value: 240,
    amt: 100,
  },
  {
    name: "15 Jan",

    value: 255,
    amt: 150,
  },
  {
    name: "16 Jan",

    value: 230,
    amt: 200,
  },
  {
    name: "17  Jan",

    value: 200,
    amt: 250,
  },
  {
    name: "18 Jan",

    value: 175,
    amt: 300,
  },
  {
    name: "19 Jan",

    value: 240,
    amt: 350,
  },
  {
    name: "20 Jan",

    value: 255,
    amt: 400,
  },
  {
    name: "21 Jan",

    value: 230,
    amt: 450,
  },
  {
    name: "22 Jan",

    value: 200,
    amt: 500,
  },
  {
    name: "23 Jan",

    value: 175,
    amt: 550,
  },
  {
    name: "24 Jan",

    value: 150,
    amt: 600,
  },
  {
    name: "25 Jan",

    value: 180,
    amt: 650,
  },
  {
    name: "26 Jan",

    value: 230,
    amt: 700,
  },
  {
    name: "27 Jan",

    value: 265,
    amt: 750,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 200,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} horizontal={true} />
          <XAxis stroke="#B2BEC39B" dataKey="name" />
          <YAxis
            stroke="#B2BEC39B"
            axisLine={false}
            domain={100}
            ticks={[100, 150, 200, 250, 300]}
          />
          <Tooltip />
          <Line
            strokeWidth={5}
            type="monotone"
            dataKey="value"
            stroke="#457B9D"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
