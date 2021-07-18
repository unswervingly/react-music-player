import styled from 'styled-components';

export const FriendWrapper = styled.div`

    .content {
        border: 1px solid #d3d3d3;
        border-width: 0 1px;
        background-color: #fff;
        min-height: 700px;

        .pic {
            position: relative;
            width: 807px;
            height: 484px;
            margin: 0 auto;
            background: url(${require("../../assets(存放资源)/image/friend_sprite.jpg")}) 0 104px no-repeat;

            .login {
                position: absolute;
                width: 160px;
                height: 50px;
                left: 534px;
                top: 363px;
                text-indent: -9999px;
            }
        }
    }
`