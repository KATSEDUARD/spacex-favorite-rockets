import styled from 'styled-components';

export const Favorites = styled.div`
    .bg {
        background-color: #1E1E1E;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            opacity: .48;
        }

        .favorites-title {
            position: absolute;
            text-transform: uppercase;
            color: #fff;
            font-size: 49px;
            font-weight: 800;
            font-family: 'Syne', 'sans-serif';
            z-index: 3;
            margin-top: 50px;
        }
    }

    .top-section {
        padding-top: 96px;
        padding-right: 14%;
        padding-left: 14%;

        .clear-all {
            font-size: 24px;
            font-family: 'Lato', 'sans-serif';
            color: #556B84;
            font-weight: 300;
            cursor: pointer;
            margin-bottom: 40px;
        }
    }

    .main-section {
        padding-right: 14%;
        padding-left: 14%;
        padding-bottom: 96px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 33%));
        justify-content: space-between;
        grid-template-rows: auto;
        row-gap: 32px;

        @media (max-width: 1280px) {
            grid-template-columns: repeat(2, minmax(0, 50%));
        }

        @media (max-width: 768px) {
            grid-template-columns: minmax(0, 100%);
        }

        .empty {
            text-transform: uppercase;
            font-size: 32px;
            font-family: 'Lato', 'sans-serif';
            font-weight: 800;
        }
    }
`;