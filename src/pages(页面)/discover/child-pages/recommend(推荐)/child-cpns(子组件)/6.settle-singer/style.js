import styled from "styled-components";

export const SetterSingerWrapper = styled.div`
    padding: 20px;

    .singer-list {

        .item {
            display: flex;
            height: 62px;
            background-color: #fafafa;
            text-decoration: none;
            margin-top: 14px;

            &:hover {
                background-color: #f4f4f4;
            }

            img {
                width: 62px;
                height: 62px;
            }

            .info {
                margin: 8px 0 0 10px;

                .title {
                    color: #333;
                    font-size: 14px;
                    font-weight: 700;
                }

                .name {
                    margin-top: 5px;
                }
            }
        }
    }


    .apply-for {

        margin-top: 12px;

        a {
            display: block;
            text-decoration: none;
            border-radius: 4px;
            background-position: right -100px;

            &:hover {
                background-position: right -182px;
            }
        }

        i {
            display: inline-block;
            width: 204px;
            height: 31px;
            font-weight: bold;
            color: #333;
            text-align: center;
            line-height: 31px;
            background-position: 0 -59px;

            &:hover {
                background-position: 0 -141px;
            }
        }
    }
`