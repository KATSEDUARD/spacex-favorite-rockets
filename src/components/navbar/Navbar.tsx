import styled from 'styled-components';

export const Navbar = styled.div`
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;
    padding-left: 14%;
    padding-right: 14%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(30, 30, 30, 0.48);
    height: 80px;
    font-family: 'Lato', sans-serif;

    .right-section {
        display: flex;
        align-items: center;
    }

    .links-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        .link {
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            position: relative;
            text-transform: uppercase;
            text-decoration: none;
            padding: 20px 0px;
            margin: 0px 32px;
            cursor: pointer;

            &::before {
                transition: 300ms;
                height: 2px;
                content: "";
                position: absolute;
                background-color: #fff;
            }
        }

        .link-animation::before {
            width: 0%;
            bottom: 15px;
        }

        .active-link::before {
            width: 100%;
            bottom: 15px;
        }

        .link-animation:hover::before {
            width: 100%;
        }
    }
`;
