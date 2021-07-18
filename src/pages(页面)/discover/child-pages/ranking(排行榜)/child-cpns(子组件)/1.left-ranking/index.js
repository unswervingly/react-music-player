import React, { memo, useEffect } from 'react'
import classNames from 'classnames'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'



import { getSizeImageY } from '../../../../../../utils(自己封装工具)/format-utils'
import { 
    changeCurrentIndex,
    getRanking,
 } from '../../store/createAction';
import { LeftRankingWrapper } from './style'

export default memo(function WYTopRanking() {

    // redux hooks
    const state = useSelector(state => {
        return {
            topLists: state.get("ranking").get("topLists"),
            currentIndex: state.get("ranking").get("currentIndex"),
        }
    }, shallowEqual)
    const currentIndex = state.currentIndex;
    console.log(state.topLists);
    console.log(currentIndex);
    // console.log(state.topLists,2);

    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        const id = (state.topLists[currentIndex] && state.topLists[currentIndex].id);
        if (!id) return;
        dispatch(getRanking(id))
    }, [state.topLists, dispatch, currentIndex])
    // console.log(state.topLists[currentIndex], 3);
    

    const handleItemClick = (index) => {
        dispatch(changeCurrentIndex(index));
        const id = state.topLists[currentIndex].id;
        dispatch(getRanking(id))
    }


    return (
        <LeftRankingWrapper>
            {
                state.topLists.map((item, index) => {
                    let header;
                    if (index === 0 || index === 4) {
                        header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                    }

                    return (
                        <div key={item.id}>
                            {header}
                            <div className={classNames("item", {"active": index === currentIndex})}
                                  onClick={e => handleItemClick(index)}>
                                <img src={getSizeImageY(item.coverImgUrl, 40)} alt={item.name} />
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="update">{item.updateFrequency}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </LeftRankingWrapper>
    )
})
