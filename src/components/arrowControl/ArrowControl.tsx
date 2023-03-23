import styled from 'styled-components';

interface CustomStyleProps {
    diraction?: string;
};

export const ArrowControl = styled.div<CustomStyleProps>`
    background-color: #ECECEC;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease .3s;
    margin-left: 16px;

    &:hover {
        background-color: #9c9c9c;
    }

    &:last-of-type {
        transform: ${(props: any) => props.diraction === 'next' ? 'rotate(0deg)' : 'rotate(180deg)'};
    }
`;