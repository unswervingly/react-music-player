import styled from 'styled-components';

export const PanelWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 46px;
    width: 986px;
    height: 301px;
    color: #e2e2e2;

    .main {
        display: flex;
        height: 260px;
        overflow: hidden;
        background: url(${require("../../../assets(存放资源)/image/playpanel_bg.png")}) -1016px 0 repeat-y;

    }
`