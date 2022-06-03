import React, {useEffect} from 'react';
import Layout from "../../components/Layout";
import {
    AccountDataContainer, AccountDataWrapper,
    AccountWidgetContainer,
    AccountWidgetWrapper,
    AccountWrapper,
    PriceWidgetWrapper
} from "./styled";
import {accountBalanceData, accountData} from "./variables";
import ChartComponent from "../../components/ChartComponent";
import accountChartIcon from "../../images/accountChartIcon.svg"
import Timer from "../../components/Timer";

export default function Account() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        // <Layout>
            <AccountWrapper>
                <AccountWidgetContainer>
                    {
                        accountBalanceData.map(item => {
                            return (
                                <AccountWidgetWrapper>
                                    <AccountDataWrapper>
                                    {
                                        item.data.map(dataItem => {
                                            return (
                                                <AccountDataContainer gradient={dataItem.color}>
                                                    <p>{dataItem.title}</p>
                                                    <h3>{dataItem.value}</h3>
                                                    <p className="description">{dataItem.description}</p>
                                                </AccountDataContainer>
                                            )
                                        })
                                    }
                                    </AccountDataWrapper>
                                    {item.chartOptions ?
                                        <ChartComponent type="radialBar" options={item.chartOptions} width="200px" icon={accountChartIcon}/> : <Timer/>}
                                </AccountWidgetWrapper>
                            )
                        })
                    }
                </AccountWidgetContainer>
                {
                    accountData.map(item => {
                        return (
                            <PriceWidgetWrapper key={item.id}>
                                <p>{item.name}</p>
                                <h3>{item.value}</h3>
                            </PriceWidgetWrapper>
                        )
                    })
                }
            </AccountWrapper>
        // </Layout>
    );
};
