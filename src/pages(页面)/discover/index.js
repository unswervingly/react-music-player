// 发现音乐 组件
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { discoverMenu } from '../../common(公共)/local-data'


import { 
    DiscoverWrapper,
    TopMenu
} from './style'

import './style'



export default memo(function WYDiscover(props) {

    // useEffect(() => {
    //     request({
    //         url: '/banner',
    //     }).then(res => {
    //         console.log(res);
    //     })
    // }, [])

    return (
        <DiscoverWrapper> 
            <div className='top'>
                <TopMenu className="wrap-v1">
                    {
                        discoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(props.route.routes)}
        </DiscoverWrapper>
    )
})
