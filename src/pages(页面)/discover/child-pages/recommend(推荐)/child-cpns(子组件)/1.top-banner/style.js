import styled from 'styled-components';

export const BannerWrapper = styled.div`
    /* 获取BannerWrapper参数 */
    background: url(${props => props.bgImage}) center center no-repeat ;
    background-size: 6000px;

    .banner {
        height: 270px;
        background-color: red;

        display: flex;
        position: relative;
    }


`

export const BannerLeft = styled.div`
    width: 730px;

    .banner-item {
        overflow: hidden;
        height: 270px;
        .image {
            width: 100%;
        }
    }
`


export const BannerRight = styled.a.attrs({
    href: "https://music.163.com/#/download",
    target: "_blank"
})`
    width: 254px;
    height: 270px;
    background: url(${require("@/assets(存放资源)/image/download.png")});
    /* react-scripts webpack.config 搜索url-loader 在里面添加esModule: false, */
`

export const BannerControl = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        cursor: pointer;
        background-image: url(${require("@/assets(存放资源)/image/banner_sprite.png")});
        background-color: transparent;

        &:hover {
            background-color: rgba(0,0,0,.1);
        }
    }

    .left {
        left: -68px;
        background-position: 0 -360px;
    }

    .right {
        right: -68px;
        background-position: 0 -508px;
    }
`