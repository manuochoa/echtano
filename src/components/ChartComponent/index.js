import React, {useState} from 'react';
import Chart from 'react-apexcharts'

export default function ChartComponent() {
    const [chartOptions, setChartOptions] = useState({
        options: {
            labels: [' '],
            chart: {
                background: "transparent",
                width: 90,
                height: 60
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
                width: 2,
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
        series: [70.3],
    })
    return (
        <Chart options={chartOptions.options}
               series={chartOptions.series}
               type='radialBar'
               width='100%'
        />
    );
};
