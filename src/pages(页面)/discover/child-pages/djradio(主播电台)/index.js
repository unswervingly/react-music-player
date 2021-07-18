import React, { memo } from 'react'


import WYRadioCategory from './child-cpns(子组件)/1.djradio-category/index'
import WYRadioRecommend from './child-cpns(子组件)/2.djradio-recommend/index'
import WYRadioRanking from './child-cpns(子组件)/3.djradio-ranking/index'


import { DjRadioWrapper } from './style'
export default memo(function WYDjRadio() {
    return (
        <DjRadioWrapper className="wrap-v2">
            <WYRadioCategory/>
            <WYRadioRecommend/>
            <WYRadioRanking/>
        </DjRadioWrapper>
    )
})
