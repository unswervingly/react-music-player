import styled from 'styled-components';

export const CoverWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    width: 48%;
    border-bottom: 1px solid #e7e7e7;

    img {
        width: 120px;
        height: 120px;
    }

    .info {
        margin-left: 20px;

        .title {
            font-weight: 700;
            color: #333;
        }

        .nickname {
            margin-top: 15px;
            margin-bottom: 6px;
            color: #000;

            .left {
                position: relative;
                top: 2px;
                display: inline-block;
                width: 14px;
                height: 15px;
                margin-right: 9px;
                background-position: -50px -300px;
                
            }
        }
    }


    .count {
        color: #999;

        .phase {
            margin-right: 10px;
        }
    }
`