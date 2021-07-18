import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 126px;
    padding: 16px 22px;
    background-position: 0 0;


    p {
        width: 205px;
        line-height: 22px;
    }

    a {
        display: block;
        width: 100px;
        height: 31px;
        text-decoration: none;
        text-align: center;
        line-height: 31px;
        color: #fff;
        margin-top: 16px;
        text-shadow: 0 1px 0 #8a060b;
        background-position: 0 -195px;

        &:hover {
            background-position: -110px -195px;
        }
    }
`