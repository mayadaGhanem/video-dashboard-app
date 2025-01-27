import { ApexOptions } from "apexcharts";
import Chart, { Props } from "react-apexcharts";

export default function Statistics({
  series,
}: {
  series: ApexOptions["series"];
}) {
  const options: Props = {
    series,
    options: {
      chart: {
        type: "bar",
        foreColor: "#000",
        height: 600,
        width: "100%", // Make the chart take 100% of the container's width
      },
      plotOptions: {
        bar: {
          horizontal: false, // Set bars to vertical
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        min: 1970,
        max: 2024,
        labels: {
          formatter: function (value) {
            return Math.floor(value); // Ensure the year is a whole integer
          },
        },
      },

      responsive: [
        {
          breakpoint: 1536,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 0,
                columnWidth: "25%",
              },
            },
          },
        },
      ],
      colors: ["#000"], // Array of colors for each bar

      tooltip: {
        custom: function ({ _, seriesIndex, dataPointIndex, w }) {
          return `
          <div style="background-color: #fff; border-radius: 8px; padding: 10px; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 250px;">
            <ul style="list-style-type: none; padding: 0; margin: 0;">
              <li>Name: ${series?.[0].data?.[dataPointIndex]?.x}</li>
              <li>Year: ${series?.[0].data?.[dataPointIndex]?.y}</li>
              <li>Awards: ${series?.[0].data?.[dataPointIndex]?.oscar}</li>
            </ul>
          </div>
        `;
        },
      },
    },
  };

  return <Chart {...options} type="bar" />;
}
