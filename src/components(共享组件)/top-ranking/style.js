import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
    flex: 1;

    .header {
        display: flex;
        height: 100px;
        margin: 20px 0 0 20px;

        .image {
            position: relative;
            width: 80px;
            height: 80px;

            img {
                width: 80px;
                 height: 80px;
            }  
        }


        .info {
            margin: 5px 0 0 10px;

            a {
                font-size: 14px;
                color: #333;
                font-weight: 700;
            }

            .btn {
                display: inline-block;
                width: 22px;
                height: 22px;
                margin: 8px 10px 0 0;
                cursor: pointer;
            }

            .play {
                background-position: -267px -205px;
            }

            .favor {
                background-position: -300px -205px;
            }
        }
    }


    .list {

        .list-item {
            display: flex;
            align-items: center;
            height: 32px;

            .rank {
                width: 35px;
                text-align: center;
                margin-left: 15px;
                font-size: 16px;
            }

            &:nth-child(-n+3) .rank {
                color: #c10d0c;
            }

            .info {
                display: flex;
                justify-content: space-between;
                width: 170px;
                height: 17px;
                line-height: 17px;
                color: #000;


                .name {
                    flex: 1;
                }

                .operate {
                    display: flex;
                    align-items: center;
                    display: none;
                    width: 82px;

                    .btn {
                        width: 17px;
                        height: 17px;
                        margin-left: 8px;
                        cursor: pointer;
                    }
                    
                    .play {
                        background-position: -267px -268px;
                    }

                    .add {
                        position: relative;
                        top: 2px;
                        background-position: 0 -700px;
                    }

                    .favor {
                        background-position: -297px -268px;
                    }
                }
            }

            &:hover {

                .operate {
                    display: block;
                }
            }
        }
    }



    .footer {
        display: flex;
        height: 32px;
        align-items: center;
        justify-content: flex-end;
        margin-right: 32px;

        a {
            color: #000;
        }
    }
`