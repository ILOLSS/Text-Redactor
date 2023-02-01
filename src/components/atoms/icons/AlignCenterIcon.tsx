import React, { Fragment } from 'react';
import IconWrap from "./helpers/IconWrap";
import IconProps from "./helpers/InterfaceIcon";

function AlignCenterIcon({ onClick, isUsed } : IconProps) {
    return (
        <IconWrap onClick={onClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                {
                    isUsed
                    ? <Fragment>
                        <rect x="4" y="13.0001" width="8" height="2" fill={isUsed ? "#2198ED" : "#AAB2BB"}/>
                        <rect y="1.00012" width="16" height="2" fill={isUsed ? "#2198ED" : "#AAB2BB"}/>
                        <rect y="9.00012" width="16" height="2" fill={isUsed ? "#2198ED" : "#AAB2BB"}/>
                        <rect y="5.00012" width="16" height="2" fill={isUsed ? "#2198ED" : "#AAB2BB"}/>
                    </Fragment>
                    : <g opacity="0.5">
                        <rect x="4" y="13.0001" width="8" height="2" fill={isUsed ? "#2198ED" : "#AAB2BB"}/>
                        <rect y="1.00012" width="16" height="2" fill={isUsed ? "#2198ED" : "#AAB2BB"}/>
                        <rect y="9.00012" width="16" height="2" fill={isUsed ? "#2198ED" : "#AAB2BB"}/>
                        <rect y="5.00012" width="16" height="2" fill={isUsed ? "#2198ED" : "#AAB2BB"}/>
                    </g>
                }
            </svg>
        </IconWrap>
    );
}

export default AlignCenterIcon;
