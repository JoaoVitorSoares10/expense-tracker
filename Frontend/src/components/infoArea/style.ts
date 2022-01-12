import Styled from "styled-components";

export const Container = Styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
`;

export const MonthArea = Styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = Styled.div`
    width: 40px;  
    text-align: center;  
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = Styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = Styled.div`
    flex: 2;
    display: flex;
`;
