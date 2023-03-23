import styled from 'styled-components';

export const ScrollTo = styled.div`
    position: absolute;
    top: 0;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: end;

    .flex-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .text {
            text-shadow: 2px 2px 0 #000;
            color: #fff;
            font-family: 'Lato', sans-serif;
            font-size: 32px;
            z-index: 3;
            margin-right: 18px;
        }

        img {
            z-index: 3;
        }
    }
`;