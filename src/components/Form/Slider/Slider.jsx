import { Slider } from '@mui/material'
import { styled } from '@mui/styles';
import React from 'react'
import { useState } from 'react';

const PrettoSlider = styled(Slider)({
    color: '#9DC8CF',
    height: "4px",
    width: "100%",
    margin: "auto",
    
    "@media screen and (max-width: 468px)": {
      width: "97%"
    },
    '& .MuiSlider-track': {
        backgroundColor: "#AB69CC",
        border: "none",
        height: "10px",
        // borderStyle: "solid",
        // borderWidth: `0px 0 ${value / 4.5625}px calc(${value / 365 * 100}vw - 368px)`,
        // borderColor: "transparent transparent #AB69CC transparent",
        // background: "transparent",
        // transform: `translateX(-0%) translateY(-${value / 365 * 100})`,
        borderRadius: 4,
    },
    '& .MuiSlider-rail': {
        width: "100%", 
        height: "6px", 
        borderStyle: "solid",
        background: "rgba(255, 255, 255, 0.5)",
        border: "1px solid #E1E3E6",
        // borderWidth: "0 0 80px calc(100vw - 386px)",
        // borderColor: "transparent transparent white transparent",
        // background: "transparent",
        // transform: "translateX(0%) translateY(-50%)",
        borderRadius: 4,
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: 'white',
      border: '2px solid #AB69CC',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-mark': {
        display: "none"
    },
    '& .MuiSlider-markLabel[data-index="0"]': {
        transform: "translateX(0%)"
    },
    '& .MuiSlider-markLabel[data-index="2"]': {
        transform: "translateX(-100%)"
    },
    '& .MuiSlider-valueLabel': {
        backgroundColor: "#191B20",
        borderRadius: 4,
        fontFamily: "Aeonik !important",
        fontWeight: "500",
        fontSize: "14px"
    }
});

const CustomSlider = (props) => {
    const [value, setValue] = useState(7)

    const min = 7
    const max = 365

    const marks = [
        {
          value: 7,
          label: '1 Week',
        },
        {
          value: max / 2,
          label: 'Half a Year',
        },
        {
          value: max,
          label: '1 Year',
        },
      ];

    return (
        <PrettoSlider 
            defaultValue={50} 
            min={min}
            max={max}
            value={value}
            aria-label="Small"
            marks={marks}
            valueLabelFormat={value => <div>{value} days</div>}
            valueLabelDisplay="on"
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default CustomSlider