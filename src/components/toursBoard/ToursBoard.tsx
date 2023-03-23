import styled from 'styled-components';

export const ToursBoard = styled.div`
    padding: 96px 14%;

    .top-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 43px;

        .tours-title {
            text-transform: uppercase;
            font-family: 'Syne', sans-serif;
            font-size: 32px;
            font-weight: 800;
            color: #1E1E1E;
        }
    }

    .middle-section {
        .error {
            color: red;
        }
    }
`;