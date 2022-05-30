import React from 'react';
import Layout from "../../components/Layout";
import {AccountWidgetContainer, AccountWidgetWrapper, AccountWrapper, PriceWidgetWrapper} from "./styled";
import {accountBalanceData, accountData} from "./variables";

export default function Account () {
  return (
    <Layout>
      <AccountWrapper>
        <AccountWidgetContainer>
            {
                accountBalanceData.map(item => {
                    return(
                        <AccountWidgetWrapper>
                            {
                                item.data.map(dataItem => {
                                    return(
                                        <p>{JSON.stringify(dataItem)}</p>
                                    )
                                })
                            }
                            kdkdkdkdkd
                        </AccountWidgetWrapper>
                    )
                })
            }
        </AccountWidgetContainer>
          {
              accountData.map(item => {
                  return(
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
