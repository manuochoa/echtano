import React from 'react';
import Layout from "../../components/Layout";
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
    XlSizeWidget
} from "./styled";
import {bottomSizeWidget, dashboardAreaChartOptions, dashboardRoundChartOptions, WidgetMSize} from "./variables";
import ChartComponent from "../../components/ChartComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {

    const percentageOfNumber = (number) => {
        return number * (300 / 100);
    }

    return (
        <Layout>
            <DashboardWrapper>
                <WidgetWrapper>
                    {
                        WidgetMSize.map(item => {
                            console.log(item.percentType)
                            return (
                                <MSizeWidget key={item.id}>
                                    <ChartComponent type="radialBar" options={dashboardRoundChartOptions} icon={item.icon} width="70%"/>
                                    <MSizeTextContainer>
                                        <p>{item.title}</p>
                                        <MSizeValueContainer percentType={item.percentType}>
                                            <h3>{item.value}</h3>
                                            <FontAwesomeIcon icon={faCaretDown}/>
                                            <p>{item.percentValue}%</p>
                                        </MSizeValueContainer>
                                    </MSizeTextContainer>
                                </MSizeWidget>
                            )
                        })
                    }
                </WidgetWrapper>
                <WidgetWrapper>
                    {
                        WidgetMSize.map(item => {
                            return (
                                <XlSizeWidget key={item.id}>
                                    <XlSizeTextContainer>
                                        <p>{item.title}</p>
                                        <h3>{item.value}</h3>
                                        <XlSizeValueContainer>
                                            <p>{item.percentValue} %</p>
                                        </XlSizeValueContainer>
                                    </XlSizeTextContainer>
                                    <ChartComponent height='70%' type='area' options={dashboardAreaChartOptions}/>
                                </XlSizeWidget>
                            )
                        })
                    }
                </WidgetWrapper>
                <BottomWidgetWrapper>
                    {
                        bottomSizeWidget.map(item => {
                            return (
                                <BottomWidgetItem>
                                    <p>{item.title}</p>
                                    <BottomValueContainer>
                                        <h3>{item.value}</h3>
                                        <p><FontAwesomeIcon icon={faCaretDown}/>{item.percentValue}</p>
                                    </BottomValueContainer>
                                    <div style={{
                                        width: '100%',
                                        height: '5px',
                                        background: '#25245D',
                                        position: 'relative',
                                        borderRadius: 50,
                                        overflow: "hidden",
                                        transition: "all 0.3s"
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            width: percentageOfNumber(item.sizeValue),
                                            height: "inherit",
                                            background: 'linear-gradient(90deg, #7517F8 0%, #E323FF 100%)',
                                        }}>

                                        </div>
                                    </div>
                                </BottomWidgetItem>
                            )
                        })
                    }
                </BottomWidgetWrapper>
            </DashboardWrapper>
        </Layout>
    );
};
