import React, { useEffect, useState } from "react";
import { getSupply } from "../../Blockchain";
import {
  BottomValueContainer,
  BottomWidgetItem,
  BottomWidgetWrapper,
  DashboardWrapper,
  MSizeTextContainer,
  MSizeValueContainer,
  MSizeWidget,
  WidgetWrapper,
  XlSizeTextContainer,
  XlSizeValueContainer,
  XlSizeWidget,
} from "./styled";
import {
  bottomSizeWidget,
  dashboardAreaChartOptions,
  dashboardRoundChartOptions,
  // WidgetMSize
} from "./variables";
import ChartComponent from "../../components/ChartComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import marketCap from "../../images/marketCap.svg";
import totalSupply from "../../images/totalSupply.svg";
import circulatingSupply from "../../images/circulatingSupply.svg";
import backendLiquidity from "../../images/backendLiquidity.svg";

export default function Dashboard() {
  const [WidgetMSize, setWidgetMSize] = useState([
    {
      id: 0,
      title: "Market Cap",
      value: "$0 M",
      percentType: "up",
      percentValue: 0,
      icon: marketCap,
    },
    {
      id: 1,
      title: "Total Supply",
      value: "0 K",
      percentType: "down",
      percentValue: 0,
      icon: totalSupply,
    },
    {
      id: 2,
      title: "Circulating Supply",
      value: "0K",
      percentType: "up",
      percentValue: 0,
      icon: circulatingSupply,
    },
    {
      id: 3,
      title: "Backed Liquidity",
      value: "0 %",
      percentType: "up",
      percentValue: 0,
      icon: backendLiquidity,
    },
  ]);

  //   getCirculatingSupply
  //   totalSupply
  const getContractNumbers = async () => {
    try {
      let { success, result } = await getSupply();
      if (success) {
        let newData = WidgetMSize;
        newData[1].value = result.totalSupply;
        newData[2].value = result.getCirculatingSupply;
        setWidgetMSize([...newData]);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const percentageOfNumber = (number) => {
    return number * (300 / 100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getContractNumbers();
  }, []);

  return (
    // <Layout>
    <DashboardWrapper>
      <WidgetWrapper>
        {WidgetMSize.map((item) => {
          return (
            <MSizeWidget key={item.id}>
              <ChartComponent
                type="radialBar"
                options={dashboardRoundChartOptions}
                icon={item.icon}
                width="70%"
              />
              <MSizeTextContainer>
                <p>{item.title}</p>
                <MSizeValueContainer percentType={item.percentType}>
                  <h3>{item.value}</h3>
                  <FontAwesomeIcon icon={faCaretDown} />
                  <p>{item.percentValue}%</p>
                </MSizeValueContainer>
              </MSizeTextContainer>
            </MSizeWidget>
          );
        })}
      </WidgetWrapper>
      <WidgetWrapper>
        {WidgetMSize.map((item) => {
          return (
            <XlSizeWidget key={item.id}>
              <XlSizeTextContainer>
                <p>{item.title}</p>
                <h3>{item.value}</h3>
                <XlSizeValueContainer>
                  <p>+{item.percentValue} %</p>
                </XlSizeValueContainer>
              </XlSizeTextContainer>
              <ChartComponent
                height="70%"
                type="area"
                options={dashboardAreaChartOptions}
              />
            </XlSizeWidget>
          );
        })}
      </WidgetWrapper>
      <BottomWidgetWrapper>
        {bottomSizeWidget.map((item) => {
          return (
            <BottomWidgetItem key={item.id} percentType={item.percentType}>
              <p>{item.title}</p>
              <BottomValueContainer>
                <h3>{item.value}</h3>
                <p>
                  <FontAwesomeIcon icon={faCaretDown} />
                  {item.percentValue}%
                </p>
              </BottomValueContainer>
              <div
                style={{
                  width: "100%",
                  maxWidth: "260px",
                  height: "5px",
                  background: "#25245D",
                  position: "relative",
                  borderRadius: 50,
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    width: percentageOfNumber(item.sizeValue),
                    height: "inherit",
                    background:
                      "linear-gradient(90deg, #7517F8 0%, #E323FF 100%)",
                  }}></div>
              </div>
            </BottomWidgetItem>
          );
        })}
      </BottomWidgetWrapper>
    </DashboardWrapper>
    // </Layout>
  );
}
