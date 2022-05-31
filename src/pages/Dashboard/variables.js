import marketCap from "../../images/marketCap.svg"
import totalSupply from "../../images/totalSupply.svg"
import circulatingSupply from "../../images/circulatingSupply.svg"
import backendLiquidity from "../../images/backendLiquidity.svg"

export const WidgetMSize = [
    {
        id: 0,
        title: "Market Cap",
        value: "$73,2 M",
        percentType: "up",
        percentValue: 10,
        icon: marketCap
    },
    {
        id: 1,
        title: "Total Supply",
        value: "260,8 K",
        percentType: "down",
        percentValue: 1.7,
        icon: totalSupply
    },
    {
        id: 2,
        title: "Circulating Supply",
        value: "170,9 K",
        percentType: "up",
        percentValue: 10,
        icon: circulatingSupply
    },
    {
        id: 3,
        title: "Backed Liquidity",
        value: "98,9 %",
        percentType: "up",
        percentValue: 2.3,
        icon: backendLiquidity
    },
];

export const bottomSizeWidget = [
    {
        id: 0,
        title: "# Value of FirePit",
        value: "294 510,75",
        percentValue: 10,
        sizeValue: 30,
    },
    {
        id: 1,
        title: "$ Value of FirePit",
        value: "$15,935,620",
        percentValue: 10,
        sizeValue: 60,
    },
    {
        id: 2,
        title: "% FirePit: Supply",
        value: "$12,875",
        percentValue: 10,
        sizeValue: 10,
    },
]

export const dashboardRoundChartOptions = {
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
            width:  1,
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
};


export const dashboardAreaChartOptions = {
    options: {
        chart: {
            width: "100%",
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
}