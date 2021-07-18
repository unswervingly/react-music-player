import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { Input } from 'antd'
import { SearchOutlined} from '@ant-design/icons'
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style.js'
import { headerLinks } from '@/common(公共)/local-data'

export default memo(function WYAppHeader() {

    // 页面代码
    const showSelectItem = (item, index) => {
        if(index < 3) {
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className="icon sprite_01"></i>
                </NavLink>
            )
        } else {
            return <a href={item.link} target="_block">{item.title}</a>
        }
    }

    // 返回的JSX
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>}/>
                    <div className="center">
                        <a href="#/">创造者中心</a>
                    </div>  
                    <div className="sign-in">
                        <a href="#/">登录</a>
                    </div>  
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
        
    )
})
