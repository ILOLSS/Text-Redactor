import React from 'react';
import styled from "styled-components";
import ApplyButton from "../atoms/button/ApplyButton";
import GappedContainer from "../atoms/Containers/GappedContainer";
import HeaderSidePanel from "../atoms/HeaderSidePanel";
import AlignFilters from "../molecules/filters/AlignFilters";
import ColorFilters from "../molecules/filters/ColorFilters";
import WeightSizeFilters from "../molecules/filters/WeightSizeFilters";
import FontFamilyFilter from "../molecules/filters/FontFamilyFilter";
import SpacingFilters from "../molecules/filters/SpacingFilters";
import { useAppDispatch } from "../../redux/hooks";
import defaultTextStyle from "../../services/helpers/defaultTextStyle";
import toNumber from "../../services/helpers/toNumber";
import getAlign from "../../services/helpers/getAlign";
import { setFontFamily, setFontWeight, setFontSize, setFontColor, setLineHeight, setLetterSpacing, setAlign } from "../../redux/reducers/textStyleReducer";

const SidePanelWrap = styled.div`
    box-sizing: border-box;
    background-color: #FFFFFF;
    height: 100vh;
    min-width: 240px;
    max-width: 240px;
    padding: 15px;
`;

function SidePanel() {

    const dispatch = useAppDispatch();

    function Submit(): void {
        dispatch(setFontFamily(localStorage.getItem("fontFamily") ?? defaultTextStyle.fontFamily));
        dispatch(setFontWeight(localStorage.getItem("fontWeight") ?? defaultTextStyle.fontWeight));
        dispatch(setFontSize(toNumber(localStorage.getItem("fontSize"), defaultTextStyle.fontSize)));
        dispatch(setFontColor(localStorage.getItem("fontColor") ?? defaultTextStyle.fontColor));
        dispatch(setLineHeight(toNumber(localStorage.getItem("lineHeight"), defaultTextStyle.lineHeight)));
        dispatch(setLetterSpacing(toNumber(localStorage.getItem("letterSpacing"), defaultTextStyle.letterSpacing)));
        dispatch(setAlign(getAlign(localStorage.getItem("align"))));
    }

    return (
        <SidePanelWrap>
            <GappedContainer>
                <HeaderSidePanel>TEXT</HeaderSidePanel>
                <FontFamilyFilter />
                <WeightSizeFilters />
                <ColorFilters />
                <SpacingFilters />
                <AlignFilters />
                <ApplyButton onClick={Submit}>Apply Changes</ApplyButton>
            </GappedContainer>
        </SidePanelWrap>
    );
}

export default SidePanel;
