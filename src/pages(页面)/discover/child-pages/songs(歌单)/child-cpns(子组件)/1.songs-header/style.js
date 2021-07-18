import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    padding-bottom: 6px;
    margin-left: 30px;
`


export const HeaderLeft = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    .title {
        font-size: 24px;
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .select {
        position: relative;
        height: 32px;
        line-height: 32px;
        margin-left: 10px;
        color: #0c73c2;
        cursor: pointer;
        background-position: right -99px;

        .ic {
            padding: 0 10px 0 15px;
            margin-right: -3px;
            background-position: 0 -59px;
        }

        i {
            display: inline-block;
            width: 8px;
            height: 5px;
            background-position: -70px -543px;
            margin-left: 5px;
            vertical-align: middle;
        }
    }
`

export const HeaderRight = styled.div`

    .hot-bg {
        height: 29px;
        background-position: 0 0;
        border-radius: 3px;

        .hot {
            display: inline-block;
            width: 46px;
            height: 29px;
            line-height: 29px;
            text-align: center;
            color: #fff;
        }
    }
`