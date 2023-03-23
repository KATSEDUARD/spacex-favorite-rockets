import styled from 'styled-components';

export const TourCard = styled.div`
    border: 1px solid #D3EAFF;
    margin-right: 34px;

    .img-section {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .card-main-content {
        padding: 32px;


        .card-main-title {
            text-align: center;
            text-transform: uppercase;
            font-family: 'Syne', sans-serif;
            color: #1E1E1E;
            font-size: 24px;
            font-weight: 700;
        }

        .card-main-description {
            text-align: center;
            font-family: 'Lato', sans-serif;
            font-size: 24px;
            font-weight: 300;
            color: #556B84;
            margin-bottom: 64px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
                    line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .card-main-footer {
            display: flex;
            align-items: center;

            .buy-button {
                width: 100%;
                margin-right: 16px;
            }

            .favorite-button div {
                margin-right: 0;
            }
        }
    }
`;