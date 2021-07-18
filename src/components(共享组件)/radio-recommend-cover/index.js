import React, { memo } from 'react'


import { getSizeImageY } from '../../utils(自己封装工具)/format-utils'
import { CoverWrapper } from './style'
export default memo(function WYRadioRecommendCover(props) {

    const {info} = props;

    return (
        <CoverWrapper>
            <a href="/#">
                <img src={getSizeImageY(info.picUrl, 150)} alt={info.name} />
            </a>
            <a href="/#" className="name text-nowrap">{info.name}</a>
            <p className="text-nowrap">{info.copywriter}</p>
        </CoverWrapper>
    )
})
