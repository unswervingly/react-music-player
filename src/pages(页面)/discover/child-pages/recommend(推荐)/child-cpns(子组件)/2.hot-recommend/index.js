import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '../../../../../../common(公共)/constants'
import { getHotRecommendsAction } from '../../store/createAction';
import WYThemeHeaderRCM from '../../../../../../components(共享组件)/theme-header-rcm/index'
import WYSongsCover from '../../../../../../components(共享组件)/songs-cover/index'

import {
    HotRecommendWrapper,
} from './style'


export default memo(function WYHotRecommend() {

    // state



    // redux hooks
    const hotRecommendData = useSelector(state => {
        return {
            hotRecommends: state.get("recommend").get("hotRecommends")
        }
    }, shallowEqual)

    const dispatch = useDispatch();



    // other hooks
    useEffect(() => {
        // dispatch(getHotRecommendsAction(8))

        dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch])
    return (
        <HotRecommendWrapper>
            <WYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}/>

            <div className="recommend-list">
                {
                    hotRecommendData.hotRecommends.map((item, index) => {
                        return <WYSongsCover key={item.id} info={item}/>
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
