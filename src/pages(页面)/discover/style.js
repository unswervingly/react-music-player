import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
    .top {
        height: 30px;
        background-color: #C20C0C;
    } 
`

export const TopMenu = styled.div`
    display: flex;
    position: relative;
    top: -4px;
    height: 30px;
    padding-left: 180px;

    .item {
        a {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            margin: 7px 17px 0;
            padding: 0 13px;
            color: #fff;
            
            &:hover, &.active {
                text-decoration: none;
                background-color: #9B0909;
                border-radius: 10px;
            }
        }
    }
`