import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImageY, formatMinuteSecond, getPlayUrl } from '../../../utils(自己封装工具)/format-utils'
import { 
    changeCurrentIndexAndSongAction, 
    changeCurrentLyricIndexAction, 
    changeSequenceAction, 
    getSongDetailAction 
} from '../store/createAction';


import { message, Slider } from 'antd';
import { NavLink } from 'react-router-dom';
import WYAppPlayPanel from '../app-play-panel/index'
import { 
    PlayBarWrapper,
    Control,
    PlayInfo,
    Operator,
} from './style'

export default memo(function WYAppPlayBar() {
    // props and state
    const [currentTimes, setCurrentTimes] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    // redux hook
    const state = useSelector(state => {
        return {
            currentSong: state.get("player").get("currentSong"),
            playList: state.get("player").get("playList"),
            sequence: state.get("player").get("sequence"),
            currentLyrics: state.get("player").get("currentLyrics"),
            currentLyricIndex: state.get("player").get("currentLyricIndex"),
        }
    }, shallowEqual)
    const currentSong = state.currentSong;
    const playList = state.playList;
    const sequence = state.sequence;
    const currentLyrics = state.currentLyrics;
    const currentLyricIndex = state.currentLyricIndex;
    
    const dispatch = useDispatch();

    // other hooks
    const audioRef = useRef();
    useEffect(() => {
        dispatch(getSongDetailAction(1842784921))
    }, [dispatch])
    useEffect(() => {
        // 播放地址
        audioRef.current.src = getPlayUrl(currentSong.id);

        // 播放地址更新后自动播放，因为浏览器自动播放报错，而且play()是promise 所以来判断自动播放和按钮
        audioRef.current.play().then(res => {
            setIsPlaying(true);
        }).catch(err => {
            setIsPlaying(false);
        })
    }, [currentSong])

    // other handle
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration = currentSong.dt || 0;
    const showDuration = formatMinuteSecond(duration);
    const showCurrentTime = formatMinuteSecond(currentTimes);

    // handle function
    // 点击按钮判断是播放还是暂停还有图标
    const playMusic = useCallback(() => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }, [isPlaying])
    
    // 当前的播放位置发送改变时触发
    const timeUpdate = (e) => {
        // console.log(e.target.currentTime);
        if(!isChanging) {
            // console.log("timeUpdate", currentTimes / duration * 100, currentTimes);
            setCurrentTimes(e.target.currentTime * 1000);
            setProgress(currentTimes / duration * 100);
        }
        
        // 获取当前唱的歌词
        let i = 0;
        for (; i < currentLyrics.length; i++) {
            const lrcTime = currentLyrics[i].time;
            if(currentTimes < lrcTime) {
                break;
            }
        }
        // console.log(currentLyrics[i - 1].content); // 获取正在播放的歌词
        // console.log(i - 1); // 解析后歌词的index  因为会获取非常频繁 所以用store保存
        if(currentLyricIndex !== i - 1) {
            dispatch(changeCurrentLyricIndexAction(i - 1));
            const content = currentLyrics[i - 1] && currentLyrics[i - 1].content;
            message.open({
                key: "lyric",
                content: content,
                duration: 0,
                className: "lyric-class"
            })
        }
    }
    // 播放结束时触发
    const handleMusicEnded = () => {
        if(sequence === 2) { // 单曲循环
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            dispatch(changeCurrentIndexAndSongAction(1))
        }
    }

    // useCallback用在函数传入自定义组件时
    const sliderChange = useCallback((value) => {
        setProgress(value)
        const time = value / 100 * duration / 1000;
        setCurrentTimes(time * 1000);
        setIsChanging(true);
    }, [duration])

    const sliderAfterChange = useCallback((value) => {
        // value / 100 * duration 是毫秒数要 / 1000
        const time = value / 100 * duration / 1000;
        audioRef.current.currentTime = time;
        setCurrentTimes(time * 1000);
        // console.log("AfterChange", time);
        setIsChanging(false);

        // 当我滑动时并且暂停 歌由暂停播放变成播放
        if(!isPlaying) {
            playMusic();
        }
    }, [duration, isPlaying, playMusic])

    // 歌曲的播放顺序
    const changeSequence = () => {
        let currentSequence = sequence + 1;
        if(currentSequence > 2) {
            currentSequence = 0;
        }

        dispatch(changeSequenceAction(currentSequence));
    }
    // 判断播放顺序的名称
    const judgingOrder = () => {
        switch (sequence) {
            case 1:
                return "随机";
            case 2:
                return "单曲";
            default:
                return "循环";
        }
    }

    // 歌曲的上一首和下一首
    const changeMusic = (tag) => {
        dispatch(changeCurrentIndexAndSongAction(tag))
    }

    return (
        <PlayBarWrapper className="sprite_playbar">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_playbar btn prev"
                            onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_playbar btn play" onClick={e => playMusic()}></button>
                    <button className="sprite_playbar btn next"
                            onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img src={getSizeImageY(picUrl, 35)} alt=""/>
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="songs">
                            <span className="singer-name">{currentSong.name}</span>
                            <a href="/#" className="song-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} 
                                    value={progress}
                                    onChange={sliderChange}
                                    onAfterChange={sliderAfterChange}
                                    tooltipVisible={false}/>
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="total-time">{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_playbar btn pip"></button>
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop" title={judgingOrder()}
                                onClick={e => changeSequence()}></button>
                        <button className="sprite_playbar btn playlist"
                                onClick={e => setShowPanel(!showPanel)}>{playList.length}</button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} 
                   onTimeUpdate={e => timeUpdate(e)}
                   onEnded={e => handleMusicEnded()}/>
            {showPanel && <WYAppPlayPanel/>}
        </PlayBarWrapper>
    )
})
