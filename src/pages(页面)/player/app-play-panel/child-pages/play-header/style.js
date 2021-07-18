import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    height: 41px;
    line-height: 41px;
    background: url(${require("../../../../../assets(存放资源)/image/playpanel_bg.png")}) -2px 0;
`

export const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-between;
    width: 553px;
    

    h3 {
        color: #e2e2e2;
        font-weight: 700;
        padding: 0 25px;
    }

    .operator {
        color: #ccc;

        button {
            background-color: transparent;
            color: #ccc;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        span {
            color: #2c2c2c;
            padding: 0 10px;
        }

        .icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            position: relative;
            top: 4px;
            right: 6px;
        }

        .favor {
            background-position: -24px 0;
        }

        .remove {
            width: 13px;
            background-position: -51px 0;
        }
    }
`

export const HeaderRight = styled.div`
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #fff;
`