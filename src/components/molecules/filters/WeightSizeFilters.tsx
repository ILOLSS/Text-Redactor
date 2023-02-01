import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FiltersSection from "../../atoms/Containers/FiltersSection";
import Dropdown from "../Dropdown";
import weights from "../../../services/weight/weights";
import DivRow from "../../atoms/Containers/DivRow";
import FontSizeIcon from "../../atoms/icons/FontSizeIcon";
import defaultTextStyle from "../../../services/defaultTextStyle";
import toNumber from "../../../services/toNumber";
import InputSidePanel from "../InputSidePanel";

const WeightDropdownWrap = styled.div`
    min-width: 135px;
    max-width: 135px;
    border-radius: 5px 0 0 5px;
`;

const SizeWrap = styled(DivRow)`
    min-width: 75px;
    max-width: 75px;
    height: 40px;
    border: 1px solid #E8ECF0;
    border-radius: 0 5px 5px 0;
    border-left: none;
    padding: 0 10px;
    align-items: space-between;
    gap: 10px;
`;

const FiltersSectionWrap = styled(FiltersSection)`
    height: auto;
    border: none;
    border-radius: 0;
    padding: 0;
    align-items: start;
`;

function WeightSizeFilters() {

    const [weight, setWeight] = useState<string>(localStorage.getItem("fontWeight") ?? defaultTextStyle.fontWeight);
    const [size, setSize] = useState<number>(toNumber(localStorage.getItem("fontSize"), defaultTextStyle.fontSize));

    useEffect(() => {
        localStorage.setItem("fontWeight", weight);
    }, [weight]);

    useEffect(() => {
        localStorage.setItem("fontSize", size.toString());
    }, [size]);

    return (
        <FiltersSectionWrap>
            <WeightDropdownWrap>
                <Dropdown
                    dropdownList={weights}
                    used={weight}
                    setUsed={setWeight}
                    isWeight={true}
                />
            </WeightDropdownWrap>
            <SizeWrap>
                <FontSizeIcon />
                <DivRow w="30px">
                    <InputSidePanel 
                        value={size}
                        setValue={setSize}
                        defaultValue={defaultTextStyle.fontSize}
                    />
                </DivRow>
            </SizeWrap>
        </FiltersSectionWrap>
    );
}

export default WeightSizeFilters;
