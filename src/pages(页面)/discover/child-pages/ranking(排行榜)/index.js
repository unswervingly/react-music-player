import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'


import WYTopRanking from '../ranking(排行榜)/child-cpns(子组件)/1.left-ranking/index'
import WYRankingHeader from '../ranking(排行榜)/child-cpns(子组件)/2.ranking-header/index'
import WYRankingList from '../ranking(排行榜)/child-cpns(子组件)/3.ranking-list/index'

import {
    getTops,
} from './store/createAction'
import { 
    RankingWrapper,
    RankingLeft,
    RankingRight,
} from './style'

export default memo(function WYRanking() {

    // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops())
  }, [dispatch])

    return (
        <RankingWrapper className="wrap-v2">
            <RankingLeft>
                <WYTopRanking />
            </RankingLeft>
            <RankingRight>
                <WYRankingHeader/>
                <WYRankingList/>
            </RankingRight>
        </RankingWrapper>
    )
})
