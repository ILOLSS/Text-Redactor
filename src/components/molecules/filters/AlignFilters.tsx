import React, { useState } from "react";
import styled from "styled-components";
import Divider from "../../atoms/Divider";
import FiltersSection from "../../atoms/Containers/FiltersSection";
import AlignCenterIcon from "../../atoms/icons/AlignCenterIcon";
import AlignJustifyIcon from "../../atoms/icons/AlignJustifyIcon";
import AlignLeftIcon from "../../atoms/icons/AlignLeftIcon";
import AlignRightIcon from "../../atoms/icons/AlignRightIcon";
import DivRow from "../../atoms/Containers/DivRow";
import getAlign from "../../../services/helpers/getAlign";

const IconWrap = styled(DivRow)`
    flex: 1;
    min-height: 100%;
    max-height: 100%;
    justify-content: center;
`;

function AlignFilters() {

    const [align, setAlign] = useState<"start" | "center" | "end" | "justify">(getAlign(localStorage.getItem("align")));

    function onClick(newAlign: "start" | "center" | "end" | "justify"): void {
        localStorage.setItem("align", newAlign);
        setAlign(newAlign);
    }

    return (
        <FiltersSection justify="start" pad="0">
            <IconWrap>
                <AlignLeftIcon isUsed={align === "start"} onClick={() => onClick("start")}/>
            </IconWrap>
            <Divider />
            <IconWrap>
                <AlignCenterIcon isUsed={align === "center"} onClick={() => onClick("center")}/>
            </IconWrap>
            <Divider />
            <IconWrap>
                <AlignRightIcon isUsed={align === "end"} onClick={() => onClick("end")}/>
            </IconWrap>
            <Divider />
            <IconWrap>
                <AlignJustifyIcon isUsed={align === "justify"} onClick={() => onClick("justify")}/>
            </IconWrap>
        </FiltersSection>
    );
}

export default AlignFilters;
