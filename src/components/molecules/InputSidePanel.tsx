import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const InputSidePanelWrap = styled.input`
    box-sizing: border-box;
    border: 0;
    outline: 0;
    max-height: 100%;
    min-height: 100%;
    width: 100%;
    padding: 0;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin:0;
    }

    &[type='number'] {
        -moz-appearance: textfield;
    }    
`;

interface InputSidePanelProps {
    value: number;
    setValue: (value: number) => void;
    defaultValue: number;
}

function InputSidePanel({ value, setValue, defaultValue }: InputSidePanelProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.addEventListener("blur", (event) => {
                if (inputRef && inputRef.current) {
                    if (Number(inputRef.current.value) <= 0) {
                        setValue(defaultValue);
                    }
                }
            })
        }
    }, [setValue, defaultValue]);

    return (
        <InputSidePanelWrap
            ref={inputRef}
            type="number"
            min="0"
            value={value.toString()}
            onChange={(event) => {
                setValue(Number(event.target.value));
            }}
        />
    );
}

export default InputSidePanel;
