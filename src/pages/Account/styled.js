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