import React, { memo } from 'react'



import { getSizeImageY } from '../../utils(自己封装工具)/format-utils'
import { CoverWrapper } from './style'
export default memo(function WYRadioRankingCover(props) {

    const {radio} = props;

    return (
        <CoverWrapper>
            <a href="/#">
                <img src={getSizeImageY(radio.picUrl, 120)} alt={radio.name} />
            </a>
            <div className="info">
                <h2 className="title">{radio.name}</h2>
                <div className="nickname sprite_icon2">
                    <i className="left sprite_icon2"></i>
                    {radio.dj.nickname}
                </div>
                <div className="count">
                    <span className="phase">共{radio.programCount}期</span>
                    <span className="subscribe">订阅{radio.subCount}次</span>
                </div>
            </div>
        </CoverWrapper>
    )
})
