import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import WYThemeHeaderNormal from '../../../../../../components(共享组件)/theme-header-normal/index'
import WYRadioRankingCover from '../../../../../../components(共享组件)/radio-ranking-cover/index'
import WYPagination from '../../../../../../components(共享组件)/pagination/index'

import { getRadios } from '../../store/createAction'
import { RankingWrapper } from './style'
export default memo(function WYRadioRanking() {

    const [currentPage, setCurrentPage] = useState(1);

    const state = useSelector(state => {
        return {
            currentId: state.get("djradio").get("currentId"),
            radios: state.get("djradio").get("radios"),
        }
    }, shallowEqual)
    const {currentId, radios} = state;
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentId === 0) return
        dispatch(getRadios(currentId, 0))
    }, [dispatch, currentId])

    console.log(radios);

    const onPageChange = (page, pageSize)=> {
        setCurrentPage(page)
        dispatch(getRadios(currentId, page * 30))
    }

    return (
        <RankingWrapper>
            <WYThemeHeaderNormal title="电台排行榜"/>
            <div className="ranking-list">
                {
                    radios.map((item, index) => {
                        return (<WYRadioRankingCover key={item.id} radio={item}/>)
                    })
                }
            </div>
            <WYPagination currentPage={currentPage}
                          total={1000}
                          pageSize={30}
                          onPageChange={onPageChange}/>
        </RankingWrapper>
    )
})
