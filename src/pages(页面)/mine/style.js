import styled from 'styled-components';

export const MineWrapper = styled.div`

    .content {
        border: 1px solid #d3d3d3;
        border-width: 0 1px;
        background-color: #fff;
        min-height: 700px;

        .pic {
            position: relative;
            width: 807px;
            height: 380px;
            margin: 0 auto;
            background: url(${require("../../assets(存放资源)/image/mine_sprite.png")}) 0 104px no-repeat;

            .login {
                position: absolute;
                width: 167px;
                height: 45px;
                left: 482px;
                top: 305px;
                text-indent: -9999px;
            }
        }
    }
`