import React from "react";

interface ColorIconProps {
    color: string;
};

function ColorIcon({ color }: ColorIconProps) {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" rx="3" fill={color}/>
            <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" stroke={color === "white" ? "black" : color} stroke-opacity="0.1"/>
        </svg>
    );
}

export default ColorIcon;
