import React from 'react';
import Layout from "../../components/Layout";
import {AccountWrapper, PriceWidgetWrapper} from "./styled";
import {accountData} from "./variables";

export default function Account () {
  return (
    <Layout>
      <AccountWrapper>
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
