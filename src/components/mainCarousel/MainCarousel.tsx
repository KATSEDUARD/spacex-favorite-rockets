import styled from 'styled-components';

export const MainCarousel = styled.div`
    background-color: #1E1E1E;

    .carousel-item {
        height: 100vh;

        img {
            opacity: 0.48;
        }
    }

    .carousel-indicators {
        position: absolute;
        right: 77px;
        bottom: 0;
        left: 0;
        top: 57px;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-right: 15%;
        margin-bottom: 1rem;
        margin-left: 15%;
        list-style: none;

        & [data-bs-target] {
            width: 24px;
            height: 24px;
            border-radius: 100%;
        }
    }

    .main-title {
        z-index: 2;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        font-family: 'Syne', sans-serif;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        line-height: 0.9;

        &-line1 {
            font-size: 49px;
            font-weight: 800;
        }

        &-line2 {
            font-size: 316px;
            font-weight: 800;
            margin-left: 20px;
        }
    }    
`;