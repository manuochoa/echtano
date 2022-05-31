import { Divider } from '@mui/material';
import React from 'react';
import Input from '../../components/Form/Input';
import CustomSlider from '../../components/Form/Slider/Slider';
import Layout from "../../components/Layout";
import { CalculatorWidgetWrapper, Circle, ColumnField, Container, CustomButton, Field, Label, SliderContainer, StatField, Stats, Text, Title } from './styled';

import refres_cvv from '../../images/refresh-ccw-rec.svg'
import wallet from '../../images/wallet-plus.svg'
import briefcase from '../../images/briefcase-2.svg'
import dollar from '../../images/dollar-circle.svg'

export default function Calculator () {
  return (
    <Layout>
      <CalculatorWidgetWrapper>
        <Container>

          {/* CALCULATOR */}
          <Title>Estimate your returns</Title>
          <Field>
            <ColumnField>
              <Label>$ECHO Amount</Label>
              <Input
                endAdornment={
                  <CustomButton>MAX</CustomButton>
                }
              />
            </ColumnField>
            <ColumnField>
              <Label>APY</Label>
              <Input
                endAdornment={
                  <CustomButton>CURRENT</CustomButton>
                }
              />
            </ColumnField>
          </Field>
          <Field>
            <ColumnField>
              <Label>$ECHO Price at Purchase ($)</Label>
              <Input
                endAdornment={
                  <CustomButton>CURRENT</CustomButton>
                }
              />
            </ColumnField>
            <ColumnField>
              <Label>Future $ECHO Price ($)</Label>
              <Input
                endAdornment={
                  <CustomButton>CURRENT</CustomButton>
                }
              />
            </ColumnField>
          </Field>
        </Container>

        {/* SLIDER */}
        <Container>
            <Title>Staking Duration</Title>
            <SliderContainer>
              <CustomSlider/>
            </SliderContainer>
        </Container>
        <Divider style={{ backgroundColor: "#EAEAEA", width: "100%", height: "1px" }}/>

        {/* STATS */}
        <Container>
          <Title>Your Returns</Title>
          <Stats>
            <StatField>
              <Circle>
                <img src={dollar} alt="dollar"/>
              </Circle>
              <ColumnField>
                <Label>Initial Investment</Label>
                <Text>$106,000,100</Text>
              </ColumnField>
            </StatField>
            <StatField>
              <Circle>
                <img src={briefcase} alt="briefcase"/>
              </Circle>
              <ColumnField>
                <Label>Current Wealth</Label>
                <Text>$137,76.80</Text>
              </ColumnField>
            </StatField>
            <StatField>
              <Circle>
                <img src={wallet} alt="wallet"/>
              </Circle>
              <ColumnField>
                <Label>Rewards Est.</Label>
                <Text>612 $ECHO</Text>
              </ColumnField>
            </StatField>
            <StatField>
              <Circle>
                <img src={refres_cvv} alt="refresh"/>
              </Circle>
              <ColumnField>
                <Label>Potential return</Label>
                <Text>$204,888,100</Text>
              </ColumnField>
            </StatField>
          </Stats>
        </Container>
      </CalculatorWidgetWrapper>
    </Layout>
  );
};
