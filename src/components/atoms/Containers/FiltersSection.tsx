import styled from "styled-components";
import DivRow from "./DivRow";

interface FiltersSectionProps {
    readonly justify?: string;
    readonly pad?: string;
};

const FiltersSection = styled(DivRow)<FiltersSectionProps>`
    height: 40px;
    min-width: 100%;
    max-width: 100%;
    border: 1px solid #E8ECF0;
    border-radius: 4px;
    justify-content: ${props => props.justify ?? "space-between"};
    padding: ${props => props.pad ?? "0 10px"};
`;

export default FiltersSection;
