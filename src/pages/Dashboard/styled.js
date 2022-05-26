import styled from "styled-components";

export const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const WidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 16px;
`

export const BottomWidgetWrapper = styled(WidgetWrapper)`
  background: rgba(255, 255, 255, 0.8);
  padding: 87px 0;
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
    transform: rotateX(${({percentType}) => percentType === "down" && '-180deg'});
    margin: 0 10px;
  }
  path {
    fill: ${({percentType, theme}) => percentType === "down" ? theme.colors.red : theme.colors.green};
  }
`

export const XlSizeWidget = styled(MSizeWidget)`
  height: 455px;
  margin: 20px 0;
`