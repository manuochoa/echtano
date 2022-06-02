import {Button} from "@mui/material";
import styled from "styled-components";
import {WidgetWrapper} from "../Dashboard/styled";

export const CalculatorWidgetWrapper = styled(WidgetWrapper)`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: fill-available;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 20px;
    margin: 0 15px;
  }
`
export const Container = styled('div')`
  padding: 24px;
  box-sizing: border-box;
  width: 100%
`

export const Title = styled('h2')`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #2E2E3A;
  margin-bottom: 24px;
`
export const Field = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const ColumnField = styled(Field)`
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 0
`

export const CustomButton = styled(Button)`
  color: #2E2E3A !important;
  font-family: Aeonik !important;
  border-radius: 100px !important;
  font-weight: 700 !important;
  font-size: 16px !important;
`

export const Label = styled('label')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #211E31;
`
export const Text = styled('p')`
  font-weight: 700;
  font-size: 20px;
  color: #211E31;
`

export const Circle = styled('div')`
  padding: 14px;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #E1E3E6;
`

export const StatField = styled(Field)`
  margin-bottom: 0;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`
export const Stats = styled(Field)`
  margin-bottom: 0
`
export const SliderContainer = styled(Field)`
  margin-top: 44px
`