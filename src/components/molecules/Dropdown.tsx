import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DivColumn from "../atoms/Containers/DivColumn";
import DivRow from "../atoms/Containers/DivRow";
import FiltersSection from "../atoms/Containers/FiltersSection";
import DropdownIcon from "../atoms/icons/DpordownIcon";
import SidePanelSectionContent from "../atoms/SidePanelSectionContent";

const DropdownWrap = styled(DivColumn)`
    min-width: 100%;
    max-width: 100%;
`;

interface DropdownSectionProps {
    readonly isActive: boolean;
    readonly isWeight: boolean;
}

const FiltersSectionWrap = styled(FiltersSection)<DropdownSectionProps>`
    border-radius: ${props => props.isActive 
        ? props.isWeight ? "4px 0 0 0" : "4px 4px 0 0"
        : props.isWeight ? "4px 0 0 4px" : "4px"
    };
    padding: 0 10px 0 15px;
`;

const DropdownList = styled(DivColumn)`
    max-height: 150px;
    min-width: 100%;
    max-width: 100%;
    overflow-x: auto;
    border: 1px solid #E8ECF0;
    border-top: none;
    border-radius: 0 0 4px 4px;
`;

const DropdownSection = styled(DivRow)`
    width: 100%;
    height: 40px;
    padding: 2.5px 15px;
    cursor: pointer;
    &:hover {
        background-color: #F4F4F4;
    }
`;

interface DropdownProps {
    dropdownList: string[];
    used: string;
    setUsed: (index: string) => void;
    isColor?: boolean;
    isWeight?: boolean;
}

function Dropdown({ dropdownList, used, setUsed, isColor = false, isWeight = false }: DropdownProps) {

    const dropdownRef = useRef<HTMLDivElement>(null);

    const [isActive, setIsActive] = useState<boolean>(false);

    function onSelect(element: string): void {
        setIsActive(false);
        setUsed(element);
    }

    useEffect(() => {
        if (dropdownRef && dropdownRef.current) {
            dropdownRef.current.addEventListener("mouseleave", (event) => {
                setIsActive(false);
            });
        }
    }, []);

    return (
        <DropdownWrap ref={dropdownRef}>
            <FiltersSectionWrap 
                isActive={isActive}
                isWeight={isWeight}
            >
                <SidePanelSectionContent
                    isColor={isColor}
                    text={used}
                />
                <DropdownIcon onClick={() => setIsActive(!isActive)}/>
            </FiltersSectionWrap>
            {
                isActive 
                ? <DropdownList>
                    {
                        dropdownList.map((element: string, index: number): JSX.Element => {
                            return (
                                <DropdownSection key={index} onClick={() => onSelect(element)}>
                                    <SidePanelSectionContent
                                        isColor={isColor}
                                        text={element}
                                    />
                                </DropdownSection>
                            )
                        })
                    }
                </DropdownList>
                : null
            }
        </DropdownWrap>
    );
}

export default Dropdown;
