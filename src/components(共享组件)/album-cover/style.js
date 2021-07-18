import styled from 'styled-components';

export const AlbumWrapper = styled.div`
    width: ${props => props.width + "px"};

    .album-image {
        position: relative;
        width: ${props => props.width + "px"};
        height: ${props => props.height + "px"};
        overflow: hidden;

        img {
            width: ${props => props.height + "px"};
            height: ${props => props.height + "px"};
        }

        .cover {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-position: 0 ${props => props.bgp + "px"};
            text-indent: -9999px;
        }
    }


    .album-info {
        font-size: 12px;
        width: ${props => props.height + "px"};


        .name {
            color: #000;
        }


        .artist {
            color: #666;
        }
    }
`