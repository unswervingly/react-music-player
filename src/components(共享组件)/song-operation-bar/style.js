import styled from 'styled-components';

export const OperationBarWrapper = styled.div`
    display: flex;
    align-items: center;

    .play {
        display: flex;
        align-items: center;

        .play-icon {
            display: inline-block;
            height: 31px;
            line-height: 31px;
            background-position: right -428px;

            .play {
                display: flex;
                align-items: center;
                background-position: 0 -387px;
                color: #fff;
                padding: 0 8px 0 6px;

                i {
                    display: inline-block;
                    width: 20px;
                    height: 18px;
                    margin: -2px 2px 0;
                    background-position: 0 -1622px;
                }
            }
        }

        .add-icon {
            display: inline-block;
            width: 31px;
            height: 31px;
            margin-right: 5px;
            background-position: 0 -1588px;
            text-indent: -9999px;
        }
    }



    .item {
        display: inline-block;
        height: 31px;
        margin-right: 5px;
        padding-right: 4px;
        background-position: right -1020px;

        .icon {
            display: inline-block;
            height: 31px;
            line-height: 31px;
            font-family: simsun;
            padding: 0 6px 0 28px;
        }

        .favor-icon {
            background-position: 0 -977px;
        }

        .share-icon {
            background-position: 0 -1225px;
        }

        .download-icon {
            background-position: 0 -2761px;
        }

        .comment-icon {
            background-position: 0 -1465px;
        }
    }
`