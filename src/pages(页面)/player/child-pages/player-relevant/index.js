import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import WYThemeHeaderPlayer from '../../../../components(共享组件)/theme-header-player/index'
import { getSimiSongAction } from '../../store/createAction'
import {
    RelevantWrapper,
} from './style'
export default memo(function WYPlayerRelevant() {
    // props and state

    // redux hooks
    const state = useSelector(state => {
        return {
            simiSongs: state.get("player").get("simiSongs")
        }
    }, shallowEqual)
    const simiSongs = state.simiSongs;

    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getSimiSongAction())
    }, [dispatch])

    // other handle
    

    return (
        <RelevantWrapper>
            <WYThemeHeaderPlayer title="相似歌曲"/>
            <div className="songs">
                {
                    simiSongs.map((item, index) => {
                        return (
                            <div className="song-item" key={item.id}>
                                <div className="info">
                                    <div className="title">
                                        <a href="/#">{item.name}</a>
                                    </div>
                                    <div className="artist">
                                        <a href="/#">{(item.artists[0] && item.artists[0].name) || []}</a>
                                        <a href="/#">{((item.artists[1] && ("/" + item.artists[1].name)) || [])}</a>
                                    </div>
                                </div>
                                <div className="operate">
                                    <button className="btn sprite_icon3 play"></button>
                                    <button className="btn sprite_icon3 add"></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </RelevantWrapper>
    )
})
