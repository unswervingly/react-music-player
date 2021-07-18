import React, { memo, useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';


// 组件
import WYThemeHeaderRCM from '../../../../../../components(共享组件)/theme-header-rcm/index'
import WYAlbumCover from '../../../../../../components(共享组件)/album-cover/index'


// import { getNewAlbum } from '../../../../../../services(网络请求相关)/recommend'
import { getNewAlbumAction } from '../../../recommend(推荐)/store/createAction'
import { AlbumWrapper } from './style'

export default memo(function WYNewAlbum() {

    // 组件自己管理数据
    /* const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getNewAlbum(10).then(response => {
            console.log(response);
            setAlbums(response.albums)
        })
    }, [])
    */

    // redux hooks
    const dispatch = useDispatch();

    const newAlbumData = useSelector(state => {
        return {
            newAlbums: state.get("recommend").get("newAlbums")
        }
    })

    // other hooks
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch])

    const pageRef = useRef();

    return (
        <AlbumWrapper>
            <WYThemeHeaderRCM title="新碟上架"/>
            
            <div className='content'>
                <button className="arrow arrow-left sprite_02" 
                        onClick={e => pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAlbumData.newAlbums.slice(item*5, (item + 1)*5).map(im => {
                                                return <WYAlbumCover key={im.id}
                                                        info={im}
                                                        width={118} 
                                                        height={100} 
                                                        bgp={-570}/>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02"
                        onClick={e => pageRef.current.next()}></button>
            </div>
        </AlbumWrapper>
    )
})
