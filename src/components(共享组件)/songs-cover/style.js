import styled from "styled-components";

export const SongsCoverWrapper = styled.div` 
    width: 140px;
    /* margin: 20px ${props => (props.right || 0)} 30px 0; */
    margin: 20px 0 30px ${props => (props.right || 0)};

    .cover-top {
        position: relative;

        img {
            width: 140px;
            height: 140px;
        }


        .cover {
            position: absolute;
            top: 0;
            left: 0;
            background-position: 0 0;

            width: 100%;
            height: 100%;    


            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;

                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background-position: 0 -537px;

                height: 27px;
                padding: 0 10px;
                color: #ccc;


                .erji {
                    display: inline-block;
                    width: 14px;
                    height: 11px;
                    background-position: 0 -24px;
                    margin-right: 5px;
                }

            
                .play {
                    display: inline-block;
                    width: 16px;
                    height: 17px;
                    background-position: 0 0;
                }
            }
        }
    }

    .cover-bottom {
        font-size: 14px;
        color: #000;
        margin-top: 5px;
    }

    .cover-source {
        color: #666;
    }

`