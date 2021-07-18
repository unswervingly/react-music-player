import styled from 'styled-components';

export const InfoWrapper = styled.div`
    display: flex;
    padding: 47px 30px 40px 39px;
`

export const InfoLeft = styled.div`
    width: 206px;

    .image {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 198px;
        height: 198px;

        .cover {
            width: 206px;
            height: 205px;
            background-position: -140px -580px;
            top: -4px;
            left: -4px;
        }
    }

    .link {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;

        i {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-position: -34px -863px;
        }

        a {
            text-decoration: underline;
            color: #0c73c2;
        }
    }
`

export const InfoRight = styled.div`
    width: 414px;
    margin-left: 20px;

    .header {
        display: flex;
        align-items: center;

        i {
            display: inline-block;
            width: 54px;
            height: 24px;
            background-position: 0 -463px;
        }

        .title {
            font-size: 24px;
            font-weight: 400;
            margin-left: 10px;
        }
    }


    .singer, .album {
        display: flex;
        align-items: center;
        margin: 10px 0;
        
        .label {
            color: #999;
        }

        .name {
            color: #0c73c2;
        }
    }


    .lyric {
        margin: 30px 0 50px;

        .lyric-info {

            .text {
                margin: 6px 0;
            }
        }

        .lyric-control {
            position: relative;
            left: -6px;
            color: #0c73c2;
            background-color: #fff;
            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }

            i {
                position: absolute;
                top: 8px;
                right: -8px;
                width: 11px;
                height: 8px;
                background-position: ${props => props.isSpread ? "-45px": "-65px"} -520px;
            }
        }


        .lrc-user {
            display: flex;
            justify-content: flex-end;
            margin-top: 48px;

            a {
                text-decoration: underline;
                color: #999;
            }
        }
    }
`