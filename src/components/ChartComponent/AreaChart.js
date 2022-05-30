import React, {useState} from 'react';
import Chart from 'react-apexcharts'

export default function AreaChart () {
  const [chartOptions, setChartOptions] = useState({
    options: {
      chart: {
        width: "100%",
        // height: "100%",
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          }
        },
      },
      stroke: {
        curve: 'straight'
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
      },
      colors: ['#AB69CC'],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [50, 100, 100]
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false
        },
      }
    },
    series: [
      {
        name: "Series 1",
        data: [60, 60, 50, 50, 35, 35, 50]
      }
    ],
  })
  return (
      <Chart options={chartOptions.options}
             series={chartOptions.series}
             type={'area'}
             className="full"
             width='100%'
             height="70%"
      />
  );
};
