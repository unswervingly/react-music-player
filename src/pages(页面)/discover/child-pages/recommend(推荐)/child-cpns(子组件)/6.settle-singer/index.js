import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import WYThemeHeaderSmall from '../../../../../../components(共享组件)/theme-header-small/index'


import { getSizeImageY } from '../../../../../../utils(自己封装工具)/format-utils'
import { getSettleSingersAction } from '../../store/createAction'
import { SetterSingerWrapper } from './style'

export default memo(function WYSettleSinger() {



    // redux hooks
    const dispatch = useDispatch();

    const SettleSingerData = useSelector(state => {
        return {
            settleSings: state.get("recommend").get("settleSings")
        }
    }, shallowEqual)

    // other hooks
    useEffect(() => {
        dispatch(getSettleSingersAction(5, 5001));
    }, [dispatch])
    return (
        <SetterSingerWrapper>
            <WYThemeHeaderSmall title="入驻歌手" more="查看全部>" />

            <div className="singer-list">
                {
                    SettleSingerData.settleSings.map((item, index) => {
                        return (
                            <a key={item.id} href="/singer" className="item">
                                <img src={getSizeImageY(item.img1v1Url, 62)} alt={item.name} />
                                <div className="info">
                                    <div className="title">{item.alias.join("") || item.name}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="apply-for">
                <a href="/todo" className="sprite_button">
                    <i className="sprite_button">申请成为网易音乐人</i>
                </a>
            </div>
        </SetterSingerWrapper>
    )
})
