import React, { useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  title: {
    text: "My chart",
    style: { color: "white" },
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
  chart: {
    backgroundColor: "black",
    zooming: {
      type: "xy",
      resetButton: {
        position: {
          align: "right",
        },
      },
    },
  },
};

export const Heart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </>
  );
};
