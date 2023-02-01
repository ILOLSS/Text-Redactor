import React, { useEffect, useState } from "react";
import fonts from "../../../services/font/fonts";
import Dropdown from "../Dropdown";
import defaultTextStyle from "../../../services/helpers/defaultTextStyle";

function FontFamilyFilter() {

    const [font, setFont] = useState<string>(localStorage.getItem("fontFamily") ?? defaultTextStyle.fontFamily);

    useEffect(() => {
        localStorage.setItem("fontFont", font);
    }, [font]);

    return (
        <Dropdown
            dropdownList={fonts}
            used={font}
            setUsed={setFont}
        />
    );
}

export default FontFamilyFilter;
