import styled from "styled-components";

export const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 425px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`

export const WidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 16px;
  @media (max-width: 425px) {
    align-items: center;
    justify-content: center;
  }
`

export const BottomWidgetWrapper = styled(WidgetWrapper)`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 425px) {
    max-width: 300px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //margin: 10px 30px;
    //padding: 0 10px;
  }
`

export const MSizeWidget = styled.div`
  width: 100%;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(40px);
  border-radius: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1440px) {
    max-width: 260px;
  }
  @media (max-width: 1440px) {
    max-width: 235px;
  }
  @media (max-width: 425px) {
    margin: 10px 0;
    max-width: 300px;
  }
`

export const MSizeTextContainer = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
  }
  @media (max-width: 1440px) {
    margin: 10px 0;
  }
`

export const MSizeValueContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    color: ${({percentType, theme}) => percentType === "down" ? theme.colors.red : theme.colors.green};
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
  svg {
    transform: rotateX(${({percentType}) => percentType === "up" && '179deg'});
    margin: 0 10px;
  }
  path {
    fill: ${({percentType, theme}) => percentType === "down" ? theme.colors.red : theme.colors.green};
  }
`

export const XlSizeWidget = styled(MSizeWidget)`
  height: 455px;
  margin: 20px 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 1440px) {
    height: 300px;
  }
`

export const XlSizeTextContainer = styled(MSizeTextContainer)`
  @media (max-width: 1440px) {
    margin: 10px;
  }
`

export const XlSizeValueContainer = styled(MSizeValueContainer)``

export const BottomWidgetItem = styled.div`
  width: calc(100% / 3);
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 55px;
  svg {
    transform: rotateX(${({percentType}) => percentType === "up" && '180deg'});
    margin: 0 10px;
  }
  path {
    fill: ${({percentType, theme}) => percentType === "down" ? theme.colors.red : theme.colors.green};
  }
  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  svg {
    margin: 0 5px 0 10px;
  }
  @media (max-width: 1440px) {
    margin: 20px;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin: 20px;
  }
`

export const BottomValueContainer = styled(XlSizeValueContainer)`
  margin: 15px 0;
  align-items: flex-end;
`
