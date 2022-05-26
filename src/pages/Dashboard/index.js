import React from 'react';
import Layout from "../../components/Layout";
import {
    BottomWidgetWrapper,
    DashboardWrapper,
    MSizeWidget,
    // MSizeWidgetWrapper,
    WidgetWrapper,
    XlSizeWidget
} from "./styled";
import {WidgetMSize} from "./variables";
import ChartComponent from "../../components/ChartComponent";

export default function Dashboard() {
    return (
        <Layout>
            <DashboardWrapper>
                <WidgetWrapper>
                    {
                        WidgetMSize.map(item => {
                            return (
                                <MSizeWidget key={item.id}>
                                    <ChartComponent/>
                                    <h3>sdasd</h3>
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
