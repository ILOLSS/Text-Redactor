import React from "react";
import IconWrap from "./helpers/IconWrap";
import IconProps from "./helpers/InterfaceIcon";

function DropdownIcon({ onClick } : IconProps) {
    return (
        <IconWrap onClick={onClick}>
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4.5 4L8 1" stroke="#AAB2BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </IconWrap>
    );
}

export default DropdownIcon;
