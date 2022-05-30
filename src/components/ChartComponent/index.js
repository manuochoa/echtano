import React, {useState} from 'react';
import Chart from 'react-apexcharts'

export default function ChartComponent({ series, type, strokeWidth }) {
    const [chartOptions, setChartOptions] = useState({
        options: {
            labels: [' '],
            chart: {
                background: "transparent",
                sparkline: {
                    enabled: true
                }
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
                show: false
            },
            stroke: {
                lineCap: "round",
                curve: 'smooth',
                width:  strokeWidth,
                dashArray: 0,
            },
            fill: {
                colors: ['#7517F8'],
                type: 'gradient',
                gradient: {
                    shadeIntensity: 0.5,
                    opacityFrom: 1,
                    opacityTo: 2,
                    stops: [0, 100]
                }
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        show: false
                    }
                }
            }
        },
        series: [series],
    })
    return (
        <Chart options={chartOptions.options}
               series={chartOptions.series}
               type={type}
               width='100%'
        />
    );
};
