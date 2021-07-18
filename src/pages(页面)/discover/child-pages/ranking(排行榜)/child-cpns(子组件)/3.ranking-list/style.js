import styled from 'styled-components';

export const RankingListWrapper = styled.div`
    padding: 0 40px;

    .play-list {
        
        table {
            width: 100%;
            border: 1px solid #d9d9d9;
            border-collapse:collapse;

            thead {

                th {
                    height: 34px;
                    line-height: 34px;
                    color: #666;
                    border: 1px solid #ddd;
                    border-width: 0 0 1px 1px;
                    padding-left: 10px;
                    background-image: url(${require("../../../../../../assets(存放资源)/image/sprite_table.png")});
                }


                .ranking {
                    width: 78px;
                    border-left: none;
                }

                .duration {
                    width: 91px;
                }

                .singer {
                    width: 173px;
                }
            }

            tbody {

                td {
                    padding: 6px 10px;

                }
                
                tr:nth-child(2n) {
                    background-color: #fff;
                }

                tr:nth-child(2n + 1) {
                    background-color: #f7f7f7;
                }


                .item {

                    .rank-num {
                        display: flex;

                        .num {
                            width: 25px;
                            height: 18px;
                            color: #999;
                            text-align: center;
                        }

                        .new {
                            width: 16px;
                            height: 17px;
                            margin-left: 12px;
                            background-position: -67px -283px;
                        }
                    }


                    .song-name {
                        display: flex;
                        align-items: center;

                        img {
                            width: 50px;
                            height: 50px;
                            margin-right: 10px;
                        }

                        .play {
                            width: 17px;
                            height: 17px;
                            background-position: 0 -103px;
                        }

                        .name {
                            width: 260px;
                            margin-left: 10px;
                        }
                    }


                    .info {
                        position: relative;
                        display: flex;
                        align-items: center;
            
                        .time {
                            width: 76px;
                        }

                        .operate {
                            position: absolute;
                            top: -6px;
                            left: -2px;
                            display: flex;
                            align-items: center;
                            display: none;

                            .btn {
                                width: 17px;
                                height: 17px;
                                margin-left: 2px;
                                cursor: pointer;
                            }

                            .add {
                                background-position: 0 -700px;
                            }

                            .collection {
                                background-position: 0 -174px;
                            }

                            .share {
                                background-position: 0 -195px;
                            }

                            .download {
                                background-position: -81px -174px;
                            }
                        }
                    }

                    &:hover {
                        .time {
                            display: none;
                        }
                        .operate {
                            display: block;
                        }
                    }

                }
            }

        }

    }
`