import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FiltersSection from "../../atoms/Containers/FiltersSection";
import DivRow from "../../atoms/Containers/DivRow";
import Divider from "../../atoms/Divider";
import LineHeightIcon from "../../atoms/icons/LineHeightIcon";
import PersentIcon from "../../atoms/icons/PersentIcon";
import InputSidePanel from "../InputSidePanel";
import LetterSpacingIcon from "../../atoms/icons/LetterSpacingIcon";
import PixelIcon from "../../atoms/icons/PixelIcon";
import Spacer from "../../atoms/Spacer";
import defaultTextStyle from "../../../services/defaultTextStyle";
import toNumber from "../../../services/toNumber";

const LineHeightWrap = styled(DivRow)`
    height: 100%;
    padding: 0 10px;
    justify-content: space-between;
    width: 100%;
`;

const LetterSpacingWrap = styled(DivRow)`
    height: 100%;
    padding-left: 10px;
    justify-content: space-between;
    width: 100%;
`;

const DivRowWrap = styled(DivRow)`
    flex: 1;
`;

function SpacingFilters() {

    const [lineHeight, setLineHeight] = useState<number>(toNumber(localStorage.getItem("lineHeight"), defaultTextStyle.lineHeight));
    const [letterSpacing, setLetterSpacing] = useState<number>(toNumber(localStorage.getItem("letterSpacing"), defaultTextStyle.letterSpacing));

    useEffect(() => {
        localStorage.setItem("lineHeight", lineHeight.toString());
    }, [lineHeight]);

    useEffect(() => {
        localStorage.setItem("letterSpacing", letterSpacing.toString());
    }, [letterSpacing]);

    return (
        <FiltersSection>
            <DivRowWrap>
                <LineHeightIcon />
                <LineHeightWrap>
                    {/* <TextSidePanelContainer>125</TextSidePanelContainer> */}
                    <InputSidePanel
                        value={lineHeight}
                        setValue={setLineHeight}
                        defaultValue={defaultTextStyle.lineHeight}
                    />
                    <PersentIcon />
                </LineHeightWrap>
            </DivRowWrap>
            <Divider />
            <DivRowWrap>
                <Spacer />
                <LetterSpacingIcon />
                <LetterSpacingWrap>
                    <InputSidePanel
                        value={letterSpacing}
                        setValue={setLetterSpacing}
                        defaultValue={defaultTextStyle.letterSpacing}
                    />
                    <PixelIcon />
                </LetterSpacingWrap>
            </DivRowWrap>
        </FiltersSection>
    );
}

export default SpacingFilters;
