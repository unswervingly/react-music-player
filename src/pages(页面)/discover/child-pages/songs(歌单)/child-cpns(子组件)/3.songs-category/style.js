import styled from "styled-components";

export const CategoryWrapper = styled.div`
    position: absolute;
    top: 50px;
    left: -20px;
    z-index: 99;
    width: 700px;
    border: 1px solid #ccc;
    background-color: #fefefe;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px #d3d3d3;
    padding-top: 10px;

    .arrow {
        position: absolute;
        top: -11px;
        left: 110px;
        width: 24px;
        height: 11px;
        background-position: -48px 0;
    }

    .all {
        padding: 10px 26px;
        border-bottom: 1px solid #e2e2e2;
        .link {
            display: inline-block;
            width: 75px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            border: 1px solid #d3d3d3;
            border-radius: 3px;
            background-color: #fafafa;
        }
    }

    .category {

        margin-left: 26px;

        dl {
            display: flex;
            align-items: flex-start;

            dt {
                display: inline-block;
                padding: 15px 0 10px;
                width: 70px;
                border-right: 1px solid #e2e2e2;

                .icon {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    background-position: -20px -735px;
                    margin-bottom: 4px;
                    margin-right: 8px;
                    vertical-align: middle;
                }

                span {
                    font-weight: 700;
                }
            }

            &.item1 {
                .icon {
                    background-position: 0 -60px;
                }
            }
            &.item2 {
                .icon {
                    background-position: 0 -88px;
                }
            }
            &.item3 {
                .icon {
                    background-position: 0 -117px;
                }
            }
            &.item4 {
                .icon {
                    background-position: 0 -141px;
                }
            }



            dd {
                display: flex;
                flex-wrap: wrap;
                flex: 1;
                /* border-left: 1px solid #e2e2e2; */
                padding-top: 18px;
                padding-left: 15px;

                .item {
                    margin-bottom: 8px;
                }

                .link {
                    color: #333;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                .divider {
                    margin: 0 12px;
                    color: #e2e2e2;
                }
            }
        } 


        
    }
`