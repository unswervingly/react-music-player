import styled from 'styled-components';

export const PannelWrapper = styled.div`
    flex: 1;
    margin: 21px 0 20px 0;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    .lrc-content {
        .lrc-item {
            height: 32px;
            color: #989898;
            text-align: center;
            line-height: 32px;

            &.active {
                color: #fff;
                font-size: 14px;
            }
        }
    }
`