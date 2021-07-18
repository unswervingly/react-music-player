import styled from 'styled-components';

export const PlayBarWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat-x;

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 47px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`


export const Control = styled.div`
    display: flex;
    align-items: center;

    .prev, .next {
        width: 28px;
        height: 28px;
    }

    .prev {
        background-position: 0 -130px;
    }

    .next {
        background-position: -80px -130px;
    }

    .play {
        width: 36px;
        height: 36px;
        margin: 0 8px;
        background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
    }

`


export const PlayInfo = styled.div`
    display: flex;
    align-items: center;
    width: 642px;

    .image {
        width: 34px;
        height: 34px;
        border-radius: 5px;
    }

    .info {
        flex: 1;
        color: #a1a1a1;
        margin-left: 10px;

        .songs {
            color: #e1e1e1;
            position: relative;
            top: 8px;
            left: 8px;

            .song-name {
                color: #a1a1a1;
                margin-left: 10px;
            }
        }

        .progress {
            display: flex;
            align-items: center;

            .ant-slider {
                width: 493px;
                margin-right: 10px;

                .ant-slider-rail {
                    height: 9px;
                    background: url(${require("../../../assets(存放资源)/image/progress_bar.png")}) 0 0;
                }

                .ant-slider-track {
                    height: 9px;
                    background: url(${require("../../../assets(存放资源)/image/progress_bar.png")}) 0 -66px;
                }

                .ant-slider-handle {
                    width: 22px;
                    height: 24px;
                    border: none;
                    margin-top: -7px;
                    background: url(${require("../../../assets(存放资源)/image/sprite_icon.png")}) 0 -250px;
                }
                
            }

            .time {
                .now-time {
                    color: #e1e1e1;
                }
                .divider {
                    margin: 0 3px;
                }
            }

        }


    }
`


export const Operator = styled.div`
    display: flex;
    position: relative;
    top: 5px;

    .btn {
        width: 25px;
        height: 25px;
        margin-right: 2px;
        cursor: pointer;
    }

    .pip {
        background: url(${require("../../../assets(存放资源)/image/sprite_pip.png")}) 0 0 no-repeat;
    }

    .favor {
        background-position: -88px -163px;
    }

    .share {
        background-position: -114px -163px;
    }

    .right {
        display: flex;
        /* align-items: center; */
        /* width: 126px; */
        padding-left: 13px;
        background-position: -147px -248px;

        .volume {
            background-position: -2px -248px;
        }

        .loop {
            background-position: ${props => {
                switch (props.sequence) {
                    case 1:
                        return "-66px -248px";
                    case 2:
                        return "-66px -344px";
                    default:
                        return "-3px -344px";
                }
            }};
        }

        .playlist {
            width: 59px;
            color: #666;
            padding-left: 18px;
            text-align: center;
            background-position: -42px -68px;
        }
    }
`