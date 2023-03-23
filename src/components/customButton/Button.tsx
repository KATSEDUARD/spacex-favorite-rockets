import styled from 'styled-components';

export const Button = styled.div`
    background-color: #D3EAFF;
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    padding: 0 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 53px;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
        background-color: #9ebbd6;
    }

    &:active {
        background-color: #1b4872;
    }
`;