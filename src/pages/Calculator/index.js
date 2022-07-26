import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "../../components/Form/Input";
import CustomSlider from "../../components/Form/Slider/Slider";
import {
  CalculatorWidgetWrapper,
  Circle,
  ColumnField,
  Container,
  CustomButton,
  Field,
  Label,
  SliderContainer,
  StatField,
  Stats,
  Text,
  Title,
} from "./styled";

import refres_cvv from "../../images/refresh-ccw-rec.svg";
import wallet from "../../images/wallet-plus.svg";
import briefcase from "../../images/briefcase-2.svg";
import dollar from "../../images/dollar-circle.svg";
import { useSelector } from "react-redux";

export default function Calculator() {
  const [inputs, setInputs] = useState({
    amount: 0,
    apy: 0,
    priceAtPurchase: 0,
    futurePrice: 0,
    time: 7,
  });
  const { usdPrice, maxBuy } = useSelector((state) => state.common);

  const truncate = (value, numDecimalPlaces) =>
    Math.trunc(value * Math.pow(10, numDecimalPlaces)) /
    Math.pow(10, numDecimalPlaces);

  const getAmount = (type) => {
    let rebaseValue = (inputs.apy / 100) ** (1 / 17520);
    let earnings = rebaseValue ** (inputs.time * 48) * inputs.amount;
    switch (type) {
      case "INITIAL_INVEST":
        return `$${truncate(inputs.amount * inputs.priceAtPurchase, 2)}`;
      case "CURRENT_WEALTH":
        return `$${truncate(inputs.amount * usdPrice, 0)}`;
      case "EST_REWARD":
        return `${earnings.toFixed(2)} $ECHO`;
      case "RETURN":
        let usdReturn = earnings * inputs.futurePrice;
        return `$${usdReturn.toFixed(0)}`;
      default:
        break;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <Layout>
    <CalculatorWidgetWrapper>
      <Container>
        {/* CALCULATOR */}
        <Title>Estimate your returns</Title>
        <Field>
          <ColumnField>
            <Label>$ECHO Amount</Label>
            <Input
              placeholder="0"
              onChange={(e) => setInputs({ ...inputs, amount: e })}
              value={inputs.amount}
              endAdornment={
                <CustomButton
                  onClick={() => setInputs({ ...inputs, amount: maxBuy })}
                >
                  MAX
                </CustomButton>
              }
            />
          </ColumnField>
          <ColumnField>
            <Label>APY</Label>
            <Input
              placeholder="0"
              onChange={(e) => setInputs({ ...inputs, apy: e })}
              value={inputs.apy}
              endAdornment={
                <CustomButton
                  onClick={() => setInputs({ ...inputs, apy: "54768" })}
                >
                  CURRENT
                </CustomButton>
              }
            />
          </ColumnField>
        </Field>
        <Field>
          <ColumnField>
            <Label>$ECHO Price at Purchase ($)</Label>
            <Input
              placeholder="0"
              onChange={(e) => setInputs({ ...inputs, priceAtPurchase: e })}
              value={inputs.priceAtPurchase}
              endAdornment={
                <CustomButton
                  onClick={() =>
                    setInputs({ ...inputs, priceAtPurchase: usdPrice })
                  }
                >
                  CURRENT
                </CustomButton>
              }
            />
          </ColumnField>
          <ColumnField>
            <Label>Future $ECHO Price ($)</Label>
            <Input
              placeholder="0"
              onChange={(e) => setInputs({ ...inputs, futurePrice: e })}
              value={inputs.futurePrice}
              endAdornment={
                <CustomButton
                  onClick={() =>
                    setInputs({ ...inputs, futurePrice: usdPrice })
                  }
                >
                  CURRENT
                </CustomButton>
              }
            />
          </ColumnField>
        </Field>
      </Container>

      {/* SLIDER */}
      <Container>
        <Title>Staking Duration</Title>
        <SliderContainer>
          <CustomSlider
            value={inputs.time}
            setValue={(e) => setInputs({ ...inputs, time: e })}
          />
        </SliderContainer>
      </Container>
      <Divider
        style={{ backgroundColor: "#EAEAEA", width: "100%", height: "1px" }}
      />

      {/* STATS */}
      <Container>
        <Title>Your Returns</Title>
        <Stats>
          <StatField>
            <Circle>
              <img src={dollar} alt="dollar" />
            </Circle>
            <ColumnField>
              <Label>Initial Investment</Label>
              <Text>{getAmount("INITIAL_INVEST")}</Text>
            </ColumnField>
          </StatField>
          <StatField>
            <Circle>
              <img src={briefcase} alt="briefcase" />
            </Circle>
            <ColumnField>
              <Label>Current Wealth</Label>
              <Text>{getAmount("CURRENT_WEALTH")}</Text>
            </ColumnField>
          </StatField>
          <StatField>
            <Circle>
              <img src={wallet} alt="wallet" />
            </Circle>
            <ColumnField>
              <Label>Rewards Est.</Label>
              <Text>{getAmount("EST_REWARD")}</Text>
            </ColumnField>
          </StatField>
          <StatField>
            <Circle>
              <img src={refres_cvv} alt="refresh" />
            </Circle>
            <ColumnField>
              <Label>Potential return</Label>
              <Text>{getAmount("RETURN")}</Text>
            </ColumnField>
          </StatField>
        </Stats>
      </Container>
    </CalculatorWidgetWrapper>
    // </Layout>
  );
}
