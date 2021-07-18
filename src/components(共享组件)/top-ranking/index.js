import React, { memo } from 'react'
import { useDispatch } from 'react-redux';


import { getSizeImageY } from '../../utils(自己封装工具)/format-utils'
import { getSongDetailAction } from '../../pages(页面)/player/store/createAction';


import { TopRankingWrapper,} from './style'
const  WYTopRanking = memo(function(props) {
    // props and state
    // 解构
    // const { info } = props;
    const { tracks = [] } = props.info;

    // redux hooks
    const dispatch = useDispatch();

    // other hooks

    // other handle
    const playMusic = (item) => {
        // console.log(item);
        dispatch(getSongDetailAction(item.id))
    }

    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                    <img src={getSizeImageY(props.info.coverImgUrl, 100)} alt={props.info.name}/>
                    <a href="/todo" className="image_cover" >ranking</a>
                </div>
                <div className="info">
                    <a href="/todo">{props.info.name}</a>
                    <div>
                        <button className="btn play sprite_02" onClick={e => playMusic(tracks[0])}></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index + 1}</div>
                                <div className="info">
                                    <span className="name text-nowrap">{item.name}</span>
                                    <div className="operate">
                                        <button className="btn sprite_02 play" 
                                                onClick={e => playMusic(item)}></button>
                                        <button className="btn sprite_icon2 add"></button>
                                        <button className="btn sprite_02 favor"></button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="/todo">查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})



export default WYTopRanking