import React, {useState} from 'react';
import Chart from 'react-apexcharts'

export default function ChartComponent({options, type, height, width, icon}) {
    const [chartOptions, setChartOptions] = useState(options)
    return (
        <>
            {icon ? <div className="chartContainer" style={{ position: "relative"}}>
                <img src={icon} alt="" style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}/>
                <Chart options={chartOptions.options}
                       series={chartOptions.series}
                       type={type}
                       width={width ? width : '100%'}
                       height={height}
                       className="chart"
                />
            </div> : <Chart options={chartOptions.options}
                            series={chartOptions.series}
                            type={type}
                            width={width ? width : '100%'}
                            height={height}
                            className="chart"
            />}
        </>
    );
};
