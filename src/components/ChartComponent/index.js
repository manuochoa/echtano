import React, {useState} from 'react';
import Chart from 'react-apexcharts'

export default function ChartComponent() {
    const [chartOptions, setChartOptions] = useState({
        options: {
            labels: [''],
            chart: {
                background: "transparent",
                width: '50%',
                height: '100%',
            },
            legend: {
                show: false,
                floating: true
            },
            colors: ['#7517F8'],
            stroke: {
                lineCap: "round",
                show: true,
                curve: 'smooth',
                colors: undefined,
                width: 2,
                dashArray: 0,
            },
            dataLabels: {
                enabled: false
            }
        },
        series: [73.2],
    })
    return (
        <div className="donut">
            <Chart options={chartOptions.options}
                   series={chartOptions.series}
                   type='radialBar'
                   height="100%"
            />
        </div>
    );
};
