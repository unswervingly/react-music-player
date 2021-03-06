import styled from 'styled-components';

export const LeftRankingWrapper = styled.div`
    padding: 25px 0;

    .header {
        padding: 12px 12px 10px 15px;
        font-size: 14px;
        color: #000;
        font-weight: 600;
        font-family: simsun;
    }


    .item {

        display: flex;
        align-items: center;
        height: 62px;
        padding-left: 20px;
        cursor: pointer;

        &:hover, &.active {
            background-color: #e6e6e6;
        }
        
        img {
            width: 40px;
            height: 40px;
        }

        .info {
            margin-left: 10px;

            .name {
                color: #000;
            }

            .update {
                color: #999;
                margin-top: 5px;
            }
        }
    }
    

`