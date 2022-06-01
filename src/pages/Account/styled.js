import styled from "styled-components";
import {DashboardWrapper, WidgetWrapper} from "../Dashboard/styled";

export const AccountWrapper = styled(DashboardWrapper)``;

export const PriceWidgetWrapper = styled(WidgetWrapper)`
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
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export const AccountWidgetContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const AccountWidgetWrapper = styled(PriceWidgetWrapper)`
  width: calc(100% / 2.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const AccountDataContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  border-left: 4px solid;
  border-image: ${({gradient}) => gradient};
  border-image-slice: 1;
  margin: 20px 25px;
  h3 {
    margin: 5px 25px;
  }
  p {
    margin: 0 25px;
  }
  .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`

export const AccountDataWrapper = styled.div`
  width: 50%;
  //max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 425px) {
    width: 35%;
  }
`