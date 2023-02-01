import React, { useEffect, useState } from "react";
import colors from "../../../services/color/colors";
import Dropdown from "../Dropdown";
import defaultTextStyle from "../../../services/defaultTextStyle";

function ColorFilters() {

    const [color, setColor] = useState<string>(localStorage.getItem("fontColor") ?? defaultTextStyle.fontColor);

    useEffect(() => {
        localStorage.setItem("fontColor", color);
    }, [color]);

    return (
        <Dropdown
            dropdownList={colors}
            used={color}
            setUsed={setColor}
            isColor={true}
        />
    );
}

export default ColorFilters;
