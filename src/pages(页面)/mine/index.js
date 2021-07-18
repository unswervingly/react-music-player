// 我的音乐 组件
import React, { memo } from 'react'


import { MineWrapper } from './style'
export default memo(function WYMine() {
    return (
        <MineWrapper>
            <div className="content wrap-v2">
                <div className="pic">
                    <a className="login" href="/#">立即登录</a>
                </div>
            </div>
        </MineWrapper>
    )
})
