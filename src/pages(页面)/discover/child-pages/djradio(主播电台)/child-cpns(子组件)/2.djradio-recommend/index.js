import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import WYThemeHeaderNormal from '../../../../../../components(共享组件)/theme-header-normal/index'
import WYRadioRecommendCover from '../../../../../../components(共享组件)/radio-recommend-cover/index'


import { getRadioRecommend } from '../../store/createAction'
import {RecommendWrapper} from './style'
export default memo(function WYRadioRecommend() {

    const state = useSelector(state => {
        return {
            currentId: state.get("djradio").get("currentId"),
            recommends: state.get("djradio").get("recommends")
        }
    }, shallowEqual)
    const {currentId, recommends} = state;
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentId === 0) return
        dispatch(getRadioRecommend(currentId))
    }, [dispatch, currentId])

    return (
        <RecommendWrapper>
            <WYThemeHeaderNormal title="优秀新电台" />
            <div className="radio-list">
                {
                    recommends.slice(0, 5).map((item, index) => {
                        return (<WYRadioRecommendCover info={item} key={item.id}/>)
                    })
                }
            </div>
        </RecommendWrapper>
    )
})
