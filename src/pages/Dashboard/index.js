import React from 'react';
import Layout from "../../components/Layout";
import {
    BottomWidgetWrapper,
    DashboardWrapper, MSizeTextContainer, MSizeValueContainer,
    MSizeWidget,
    WidgetWrapper,
    XlSizeWidget
} from "./styled";
import {WidgetMSize} from "./variables";
import ChartComponent from "../../components/ChartComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
    return (
        <Layout>
            <DashboardWrapper>
                <WidgetWrapper>
                    {
                        WidgetMSize.map(item => {
                            console.log(item.percentType)
                            return (
                                <MSizeWidget key={item.id}>
                                    <ChartComponent/>
                                    <MSizeTextContainer>
                                        <p>{item.title}</p>
                                        <MSizeValueContainer percentType={item.percentType}>
                                            <h3>{item.value}</h3>
                                            <FontAwesomeIcon icon={faCaretDown} />
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
                                <XlSizeWidget key={item.id}/>
                            )
                        })
                    }
                </WidgetWrapper>
                <BottomWidgetWrapper/>
            </DashboardWrapper>
        </Layout>
    );
};
