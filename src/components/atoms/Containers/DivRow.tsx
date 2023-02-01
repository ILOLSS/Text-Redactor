import styled from "styled-components";

interface DivRowProps {
    readonly w?: string;
}

const DivRow = styled.div<DivRowProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: ${props => props.w ?? "auto"};
`;

export default DivRow;
