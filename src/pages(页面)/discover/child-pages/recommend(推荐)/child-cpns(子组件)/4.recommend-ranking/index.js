import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import WYThemeHeaderRCM from '../../../../../../components(共享组件)/theme-header-rcm/index'
import WYTopRanking from '../../../../../../components(共享组件)/top-ranking/index'

import { getTopListsAction } from '../../../recommend(推荐)/store/createAction'
import {RankingWrapper} from './style'

export default memo(function WYRecommendRanking() {

    // redux hooks
    const topListsData = useSelector(state => {
        return {
            upRankings: state.get("recommend").get("upRankings"),
            newRankings: state.get("recommend").get("newRankings"),
            originRankings: state.get("recommend").get("originRankings"),
        }
    }, shallowEqual)

    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getTopListsAction(0));
        dispatch(getTopListsAction(2));
        dispatch(getTopListsAction(3));
    }, [dispatch])


    return (
        <RankingWrapper>
            <WYThemeHeaderRCM title="榜单"/>

            <div className="tops">
                <WYTopRanking info={topListsData.upRankings}/>
                <WYTopRanking info={topListsData.newRankings}/>
                <WYTopRanking info={topListsData.originRankings}/>
            </div>
        </RankingWrapper>
    )
})
