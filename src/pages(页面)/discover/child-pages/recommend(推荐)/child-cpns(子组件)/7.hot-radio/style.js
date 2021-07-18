import styled from "styled-components";

export const HotRadioWrapper = styled.div`
    padding: 20px;

    .radio-list {
        margin-top: 20px;

        .item {
            display: flex;
            width: 210px;
            margin-bottom: 10px;

            img {
                width: 40px;
                height: 40px;
            }

            .info {
                width: 160px;
                margin-left: 10px;

                .name {
                    display: block;
                    color: #000;
                    margin-top: 3px;
                }

                .position {
                    color: #666;
                }
            }
        }
    }
`