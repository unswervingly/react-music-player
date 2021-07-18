import React, { memo } from 'react'
// import PropsTypes from 'prop-types'

import { getSizeImageY } from '../../utils(自己封装工具)/format-utils'
import {AlbumWrapper} from './style'

export default memo(function WYAlbumCover(props) {

    const { info, height = 130, width = 153, bgp = -845 } = props;

    return (
        <AlbumWrapper width={width} height={height} bgp={bgp}>
            <div className="album-image">
                <img src={getSizeImageY(info.picUrl, height)} alt={info.name}/>
                <a href="/todo" className="cover sprite_cover">{info.name}</a>
            </div>
            <div className="album-info">
                <div className="name text-nowrap">{info.name}</div>
                <div className="artist text-nowrap">{info.artist.name}</div>
            </div>
        </AlbumWrapper>
    )
})


// WYAlbumCover.defaultProps = {
//     height = 130,
//     width = 153,
//     bgp = -845,
// }

// WYAlbumCover.propTypes = {
//     height: PropsTypes.number.isRequired,
//     width: PropsTypes.number.isRequired,
//     bgp: PropsTypes.number.isRequired,
// }