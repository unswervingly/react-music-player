import styled from 'styled-components';



export const HeaderWrapper = styled.div`
    height: 75px;
    color: #fff;
    background-color: #242424;

    .content {
        height: 70px;
        /* background-color: pink; */
        
        display: flex;
        justify-content: space-between;
    }

    .divider {
        height: 5px;
        background-color: #c20c0c;
    }
`

export const HeaderLeft = styled.div`
    display: flex;
    .logo {
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px
    }

    .select-list {
        display: flex;
        line-height: 70px;

        .select-item {
            position: relative;
            a {
                display: block;
                padding: 0 20px;
                font-size: 14px;
                color: #ccc;
            }

            &:last-of-type a {
                position: relative;
                &::after {
                    position: absolute;
                    content: "";
                    width: 28px;
                    height: 19px;
                    background-image: url(${require("../../assets(存放资源)/image/sprite_01.png")});
                    /* react-scripts webpack.config 搜索url-loader 在里面添加esModule: false, */
                    background-position: -190px 0;
                    top: 20px;
                    right: -15px;
                }
            }

            &:hover a, a.active {
                color: #fff;
                background: #000;
                text-decoration: none;
            }

            .active .icon {
                position: absolute;
                display: inline-block;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left: 50%;
                transform: translate(-50%, 0);
                background-position: -226px 0;
            }
        }
    }
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;

    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;
    }

    input {
      &::placeholder {
        font-size: 12px;
      }
    }

    .center a {
        display: block;
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        color: #ccc;
        background-color: transparent;
    }

    .sign-in a {
        display: block;
        margin-right: 22px;
        color: #787878;
    }
`