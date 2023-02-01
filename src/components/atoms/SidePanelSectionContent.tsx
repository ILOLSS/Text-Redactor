import React from 'react';
import styled from "styled-components";
import ColorIcon from "./icons/ColorIcon";
import TextSidePanelContainer from "./Containers/TextSidePanelContainer";
import DivRow from "./Containers/DivRow";

const ColorWrap = styled(DivRow)`
    min-height: 100%;
    max-height: 100%;
    justify-content: space-between;
    gap: 10px;
`;

interface SidePanelSectionContentProps {
    isColor: boolean;
    text: string;
};

function SidePanelSectionContent({ isColor, text }: SidePanelSectionContentProps) {
    return (
        isColor
        ? <ColorWrap>
            <ColorIcon color={text}/>
            <TextSidePanelContainer>{text}</TextSidePanelContainer>
        </ColorWrap>
        : <TextSidePanelContainer>{text}</TextSidePanelContainer>
    );
};

export default SidePanelSectionContent;
