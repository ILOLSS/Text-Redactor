import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TextArea from "../atoms/TextArea";
import { useAppSelector } from "../../redux/hooks";

const CanvasWrap = styled.div`
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex: 1;
    padding: 40px 10px;
    overflow: scroll;
`;

function Canvas() {

    const fontFamily = useAppSelector(state => state.fontFamily);
    const fontWeight = useAppSelector(state => state.fontWeight);
    const fontSize = useAppSelector(state => state.fontSize);
    const fontColor = useAppSelector(state => state.fontColor);
    const lineHeight = useAppSelector(state => state.lineHeight);
    const letterSpacing = useAppSelector(state => state.letterSpacing);
    const align = useAppSelector(state => state.align);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textAreaRef && textAreaRef.current) {
            textAreaRef.current.addEventListener("change", (event) => {
                if (textAreaRef && textAreaRef.current) {
                    localStorage.setItem("textArea", textAreaRef.current.value);
                }
            });
        }
    }, []);

    useEffect(() => {
        const WebFont = require('webfontloader');

        WebFont.load({
            google: {
                families: [fontFamily]
            }
        });
    }, [fontFamily]);

    return (
        <CanvasWrap>
            <TextArea
                ref={textAreaRef}
                fontFamily={fontFamily}
                fontWeight={fontWeight}
                fontSize={fontSize}
                fontColor={fontColor}
                lineHeight={lineHeight}
                letterSpacing={letterSpacing}
                align={align}
            >
                {localStorage.getItem("textArea")}
            </TextArea>
        </CanvasWrap>
    );
}

export default Canvas;
