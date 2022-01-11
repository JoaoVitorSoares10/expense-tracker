import Styled from 'styled-components';

export const Container = Styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
`;

export const Content = Styled.div`
    flex:1;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 5px;
`;

export const InputText = Styled.span`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

export const Input = Styled.input`
    height: 22px;
    border-radius: 5px;
    border: 2px solid #c0c0c0;
    outline: 0;
    color: #444;
`;

export const Button = Styled.a`
    text-align: center;
    background-color: #57c4c7;
    padding: 5px 20px;
    margin-top: 20px;
    border-radius: 5px;
    color: #444;
    cursor: pointer;
`;

export const SelectArea = Styled.select`
    height: 28px;
    border: 2px solid #c0c0c0;
    border-radius: 5px;
    background-color: #fff;
    color: #444;
`;

export const SelectItem = Styled.option``;

