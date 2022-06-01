export const accountData = [
    {
        id: 0,
        name: "Current #ECHO Price",
        value: "$58.85",
    },
    {
        id: 1,
        name: "Next Reward Amount",
        value: "1,173 $ECHO",
    },
    {
        id: 2,
        name: "Next Reward Amount USD",
        value: "$58,943",
    },
    {
        id: 3,
        name: "Next Reward Yield",
        value: "0.02355%",
    },
    {
        id: 4,
        name: "ROI(1-Day Rate) USD",
        value: "$0",
    },
    {
        id: 5,
        name: "ROI(5-Day Rate",
        value: "11.96%",
    },
    {
        id: 6,
        name: "ROI(5-Day Rate) USD",
        value: "$0",
    },
]

export const accountBalanceData = [
    {
        id: 0,
        data: [
            {
                id: 0,
                color: "linear-gradient(180deg, #4DA1FF 0%, #4DFFDF 100%)",
                title: "Your Balance:",
                value: "$15,935,620",
                percentValue: "10",
                description: "123,353,80 $ECHO"
            },
            {
                id: 1,
                color: "linear-gradient(180deg, #FF7D05 0%, #FFD422 100%)",
                title: "APY:",
                value: "383 025,8%",
                percentValue: "10",
                description: "Daily ROI 2.28%"
            }
        ],
        chartOptions: {
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
                    width: 1,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    colors: ['#4DFFDF', '#FF7D05'],
                    gradient: {
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: [ '#4DA1FF', '#FFD422'],
                        opacityFrom: 1,
                        opacityTo: 1,
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
            series: [80, 87],
        }
    },
    {
        id: 1,
        data: [
            {
                id: 0,
                color: "linear-gradient(180deg, #7517F8 0%, #E323FF 100%)",
                title: "Next Rebase:",
                value: "00:10:55",
                percentValue: "10",
                description: "You will earn money soon"
            }
        ],
    }
]