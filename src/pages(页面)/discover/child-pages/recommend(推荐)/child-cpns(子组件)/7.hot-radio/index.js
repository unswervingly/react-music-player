import React, { memo } from 'react'


import WYThemeHeaderSmall from '../../../../../../components(共享组件)/theme-header-small/index'

import { getSizeImageY } from '../../../../../../utils(自己封装工具)/format-utils'
import {
    hotRadios
} from "../../../../../../common(公共)/local-data.js";
import {HotRadioWrapper} from './style'

export default memo(function WYHotRadio() {
    return (
        <HotRadioWrapper>
            <WYThemeHeaderSmall title = "热门主播"/>

            <div className="radio-list">
                {
                    hotRadios.map((item, index) => {
                        return (
                            <div key={item.picUrl} className="item">
                                <a href="/todo" className="image">
                                    <img src={getSizeImageY(item.picUrl, 40)} alt={item.name}/>
                                </a>
                                <div className="info">
                                    <a href="/todo" className="name">{item.name}</a>
                                    <div className="position text-nowrap">{item.position}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HotRadioWrapper>
    )
})
