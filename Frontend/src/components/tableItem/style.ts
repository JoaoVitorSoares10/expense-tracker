import styled from "styled-components";

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
    padding: 10px 0px;
`;

export const category = styled.div<{ color:string }>`
    color: #fff;
    background-color: ${props => props.color};
    border-radius: 5px;
    display: inline-block;
    padding: 5px 10px;
`;

export const value = styled.div<{ color:string }>`
    color: ${props => props.color};
`;