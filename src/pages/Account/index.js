import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
  AccountDataContainer,
  AccountDataWrapper,
  AccountWidgetContainer,
  AccountWidgetWrapper,
  AccountWrapper,
  PriceWidgetWrapper,
} from "./styled";
import { accountBalanceData } from "./variables";
import ChartComponent from "../../components/ChartComponent";
import accountChartIcon from "../../images/accountChartIcon.svg";
import Timer from "../../components/Timer";
import { getBalances, getNextRebase } from "../../Blockchain";
import Countdown from "react-countdown";

const countdownRenderer = ({ formatted }) => {
  return (
    <p>
      {formatted.days > 0 && `${formatted.days} days`} {formatted.minutes}:
      {formatted.seconds}
    </p>
  );
};

export default function Account({ userAddress }) {
  const [stronkBalance, setBalance] = useState(0);
  const [accountData, setAccountData] = useState([
    {
      id: 0,
      name: "Current Stronk Price",
      value: "$0",
    },
    {
      id: 1,
      name: "Next Reward Amount",
      value: "0 STRONKS",
    },
    {
      id: 2,
      name: "Next Reward Amount USD",
      value: "$0",
    },
    {
      id: 3,
      name: "Next Reward Yield",
      value: "0.036%",
    },
    {
      id: 4,
      name: "ROI(1-Day Rate) USD",
      value: "$0",
    },
    {
      id: 5,
      name: "ROI(5-Day Rate",
      value: "9,92%",
    },
    {
      id: 6,
      name: "ROI(5-Day Rate) USD",
      value: "$0",
    },
  ]);
  const [accountBalanceData, setAccountBalanceData] = useState([
    {
      id: 0,
      data: [
        {
          id: 0,
          color: "linear-gradient(180deg, #4DA1FF 0%, #4DFFDF 100%)",
          title: "Your Balance:",
          value: "$0",
          percentValue: "10",
          description: "0 STRONK",
        },
        {
          id: 1,
          color: "linear-gradient(180deg, #FF7D05 0%, #FFD422 100%)",
          title: "APY:",
          value: "54,768%",
          percentValue: "10",
          description: "Daily ROI 1,728%",
        },
      ],
      chartOptions: {
        options: {
          labels: [" "],
          chart: {
            background: "transparent",
            sparkline: {
              enabled: true,
            },
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
            show: false,
          },
          stroke: {
            lineCap: "round",
            curve: "smooth",
            width: 1,
            dashArray: 0,
          },
          fill: {
            type: "gradient",
            colors: ["#4DFFDF", "#FF7D05"],
            gradient: {
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#4DA1FF", "#FFD422"],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                show: false,
              },
            },
          },
        },
        series: [80, 87],
      },
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
          description: "You will earn money soon",
        },
      ],
    },
  ]);
  const [nextRebase, setNextRebase] = useState(Date.now() + 1800000);

  const getUserBalances = async () => {
    if (userAddress) {
      let { tokenBalance } = await getBalances(userAddress);
      if (tokenBalance) {
        let price = 0.035; // get real price once trading
        let nextReward = (tokenBalance * 0.036) / 100;
        let nextRewardUSD = nextReward * price;
        let oneDayRoiUSD = ((tokenBalance * 1.728) / 100) * price;
        let fiveDayRoiUSD = ((tokenBalance * 9.92) / 100) * price;

        let newAccountBalanceData = accountBalanceData;
        newAccountBalanceData[0].data[0].value = `$${(
          price * tokenBalance
        ).toFixed(2)}`;
        newAccountBalanceData[0].data[0].description = `${tokenBalance.toFixed(
          0
        )} STRONK`;

        let newData = accountData;
        newData[0].value = `$${price.toFixed(2)}`;
        newData[1].value = `${nextReward.toFixed(0)} STRONKS`;
        newData[2].value = `$${nextRewardUSD.toFixed(2)}`;
        newData[4].value = `$${oneDayRoiUSD.toFixed(2)}`;
        newData[6].value = `$${fiveDayRoiUSD.toFixed(2)}`;

        setAccountData([...newData]);
      }
    }
  };

  const getRebaseTime = async () => {
    let { success, result } = await getNextRebase();
    if (success) {
      setNextRebase(result.nextRebase * 1000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getRebaseTime();
  }, []);

  useEffect(() => {
    console.log(userAddress, "userAddress");
    getUserBalances();
  }, [userAddress]);

  return (
    // <Layout>
    <AccountWrapper>
      <AccountWidgetContainer>
        {accountBalanceData.map((item, index) => {
          return (
            <AccountWidgetWrapper>
              <AccountDataWrapper>
                {item.data.map((dataItem) => {
                  return (
                    <AccountDataContainer gradient={dataItem.color}>
                      <p>{dataItem.title}</p>
                      {index === 1 ? (
                        <Countdown
                          date={nextRebase}
                          renderer={countdownRenderer}
                        />
                      ) : (
                        <h3>{dataItem.value}</h3>
                      )}
                      <p className="description">{dataItem.description}</p>
                    </AccountDataContainer>
                  );
                })}
              </AccountDataWrapper>
              {item.chartOptions ? (
                <ChartComponent
                  type="radialBar"
                  options={item.chartOptions}
                  width="200px"
                  icon={accountChartIcon}
                />
              ) : (
                <Timer />
              )}
            </AccountWidgetWrapper>
          );
        })}
      </AccountWidgetContainer>
      {accountData.map((item) => {
        return (
          <PriceWidgetWrapper key={item.id}>
            <p>{item.name}</p>
            <h3>{item.value}</h3>
          </PriceWidgetWrapper>
        );
      })}
    </AccountWrapper>
    // </Layout>
  );
}
