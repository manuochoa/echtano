import React from 'react';
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

export default function Account() {
    return (
        <Layout>
            <AccountWrapper>
                <AccountWidgetContainer>
                    {
                        accountBalanceData.map(item => {
                            return (
                                <AccountWidgetWrapper>
                                    <AccountDataWrapper>
                                    {
                                        item.data.map(dataItem => {
                                            console.log(dataItem)
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
                                    {item.chartOptions &&
                                        <ChartComponent type="radialBar" options={item.chartOptions} width="250px" icon={accountChartIcon}/>}
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
        </Layout>
    );
};
