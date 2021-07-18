import styled from 'styled-components';

export const PlayerWrapper = styled.div`

    .content {
        display: flex;
        background: url(${require("../../assets(存放资源)/image/wrap-bg.png")}) repeat-y;
        background-color: #fff;
    }
`

export const PlayerLeft = styled.div`
    width: 710px;
`

export const PlayerRight = styled.div`
    width: 270px;
    padding: 20px 40px 40px 30px;
`