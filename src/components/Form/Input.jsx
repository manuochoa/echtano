import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root:{
        width: "100%",
        '& label.Mui-focused': {
            color: '#4B5EA3'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4807EA',
            boxShadow: "0 0 0px 4px #4807EA4D"
        },
        '& .MuiOutlinedInput-root': {
            background: "rgba(255, 255, 255, 0.5)",
            border: "1px solid #E1E3E6",
            borderRadius: "100px",
        },
        '& .MuiFormHelperText-root.Mui-error': {
            margin: 0,
            marginTop: 5,
        }
    }
}));

const Input = (props) => {
    const { 
        label, 
        variant = "outlined", 
        type = "text", 
        onChange, 
        value, 
        error,
        multiline = false,
        rows = 1,
        endAdornment = null,
        startAdornment = null,
        regex = null,
        placeholder = "",
        disabled = false
    } = props

    const material = useStyles()

    const handleChange = (e) => {
        if(regex === "number") {
            const onlyNums = e.target.value.replace(/[^0-9]/g, '');
            onChange(onlyNums)
        }else {
            onChange(e.target.value)
        }
    }

    return (
        <TextField
            error={!!error}
            helperText={error ? error.message : null}
            classes={material}
            label={label}
            variant={variant}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
            autoComplete="off"
            type={type}
            disabled={disabled}
            multiline={multiline}
            rows={rows}
            InputProps={{
                startAdornment: startAdornment && (
                    <InputAdornment position='start' style={{ width: "fit-content", marginRight: "10px" }}>
                        {startAdornment}
                    </InputAdornment>
                ),
                endAdornment: endAdornment && (
                    <InputAdornment position='end' style={{ width: "fit-content" }}>
                        {endAdornment}
                    </InputAdornment>
                )
            }}
        />
    )
}

export default Input