import React from 'react';
import Layout from "../../components/Layout";
import {
    BottomWidgetWrapper,
    DashboardWrapper,
    MSizeWidget,
    MSizeWidgetWrapper,
    WidgetWrapper,
    XlSizeWidget
} from "./styled";
import {WidgetMSize} from "./variables";

export default function Dashboard() {
    return (
        <Layout>
            <DashboardWrapper>
                <WidgetWrapper>
                    {
                        WidgetMSize.map(item => {
                            return (
                                <MSizeWidget key={item.id}/>
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
