import styled from 'styled-components';

export const PlayerSongsWrapper = styled.div`

    .songs {
        

        .song-item {
            display: flex;
            
            margin-bottom: 15px;
            width: 200px;

            .image {
                width: 50px;
                height: 50px;
            }

            .info {
                margin-left: 10px;
                line-height: 24px;
                .name {
                    font-size: 14px;
                    color: #333;
                }

                .auchor {

                    span {
                        color: #999;
                    }
                    .nickname {
                        color: #666;
                        margin: 0 2px 0 4px;
                    }
                }
            }
        }


    }
`