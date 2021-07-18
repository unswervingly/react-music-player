import styled from 'styled-components';

export const PlayListWrapper = styled.div`
    width: 553px;

    .play-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 28px;
        line-height: 28px;
        color: #ccc;
        padding: 0 8px 0 25px;
        cursor: pointer;

        &.active {
            color: #fff;
            background-color: #000;

            ::before {
                position: absolute;
                top: 9px;
                left: 8px;
                content: "";
                width: 10px;
                height: 13px;
                background: url(${require("../../../../../assets(存放资源)/image/playlist_sprite.png")}) -182px 0;
            }
        }

        &:hover {
            color: #fff;
            background-color: rgba(0, 0, 0, .4);
        }

        .right {
            display: flex;
            align-items: center;

            .singer {
                width: 80px;
            }

            .duration {
                width: 45px;
            }

            .link {
                width: 14px;
                height: 16px;
                background-position: -100px 0;
                margin-left: 20px;
            }
        }


        .line {
            position: absolute;
            left: 552px;
            top: -1px;
            z-index: 2;
            width: 6px;
            height: 260px;
            background-color: #000;
            opacity: .5;
        }
    }
`