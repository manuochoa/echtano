import styled from "styled-components";
import {DashboardWrapper, WidgetWrapper} from "../Dashboard/styled";

export const AccountWrapper = styled(DashboardWrapper)``;

export const PriceWidgetWrapper = styled(WidgetWrapper)`
  //padding: 15px 25px;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  h3, p {
    margin: 15px 25px;
  }
  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
`

export const AccountWidgetContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const AccountWidgetWrapper = styled(PriceWidgetWrapper)`
  width: calc(100% / 2.1);
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`