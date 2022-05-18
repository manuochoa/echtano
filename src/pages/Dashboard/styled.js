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
`

export const BottomWidgetWrapper = styled(WidgetWrapper)`
  background: rgba(255, 255, 255, 0.8);
  padding: 87px 0;
  border-radius: 16px;
`

export const MSizeWidget = styled.div`
  width: calc(100% / 4);
  max-width: 270px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(40px);
  border-radius: 16px;
  padding: 50px 0;
`

export const XlSizeWidget = styled(MSizeWidget)`
  height: 455px;
  margin: 20px 0;
`