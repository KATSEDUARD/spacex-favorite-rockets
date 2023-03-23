import styled from 'styled-components';

interface CustomStyleProps {
    isActive?: boolean,
    isFavorite?: boolean,
    location?: string
};

export const FavoritesButton = styled.div<CustomStyleProps>`
    width: 53px;
    height: 53px;
    background-color: ${(props: any) => props.isActive ? '#DD377D' : props.isFavorite && props.location !== '/favorites' ? '#5ae6a0' : '#ECECEC'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
        background-color: #ff93c0;
    }
`;