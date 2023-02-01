import styled from "styled-components";

interface TextAreaProps {
    readonly fontFamily: string;
    readonly fontWeight: string;
    readonly fontSize: number;
    readonly fontColor: string;
    readonly lineHeight: number;
    readonly letterSpacing: number;
    readonly align: "start" | "center" | "end" | "justify";
}

const TextArea = styled.textarea<TextAreaProps>`
    resize: none;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    padding: 30px;
    background-color: #FFFFFF;
    min-height: 720px;
    min-width: 600px;
    max-height: 720px;
    max-width: 600px;
    margin: auto;
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => props.fontColor};
    letter-spacing: ${props => `${props.letterSpacing}px`};
    line-height: ${props => `${props.lineHeight}%`};
    text-align: ${props => props.align};
`;

export default TextArea;
