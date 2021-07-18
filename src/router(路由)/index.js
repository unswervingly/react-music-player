import React from 'react'
import { Redirect } from 'react-router';

// import WYDiscover from '@/pages(页面)/discover/index';
// import WYRecommend from '../pages(页面)/discover/child-pages/recommend(推荐)/index';
// import WYRanking from '../pages(页面)/discover/child-pages/ranking(排行榜)/index';
// import WYSongs from '../pages(页面)/discover/child-pages/songs(歌单)/index';
// import WYDjRadio from '../pages(页面)/discover/child-pages/djradio(主播电台)/index';
// import WYArtist from '../pages(页面)/discover/child-pages/artist(歌手)/index';
// import WYAlbum from '../pages(页面)/discover/child-pages/album(新碟上架)/index';

// import WYMine from '../pages(页面)/mine/index';
// import WYFriend from '../pages(页面)/friend/index';
// import WYPlayer from '../pages(页面)/player/index';


// React.lazy(() => import(""))  路由懒加载  
// 懒加载 用到的时候加载
// 使用路由懒加载 需要在渲染所有路由里添加<Suspense fallback={组件或者jsx}></Suspense>不然在懒加载时用户没有加载出来显示空白  使用<Suspense fallback={组件或者jsx}></Suspense>可以作为加载的提示或者展位进行展示
const WYDiscover = React.lazy(() => import("@/pages(页面)/discover/index"));
const WYRecommend = React.lazy(() => import("../pages(页面)/discover/child-pages/recommend(推荐)/index"));
const WYRanking = React.lazy(() => import("../pages(页面)/discover/child-pages/ranking(排行榜)/index"));
const WYSongs = React.lazy(() => import("../pages(页面)/discover/child-pages/songs(歌单)/index"));
const WYDjRadio = React.lazy(() => import("../pages(页面)/discover/child-pages/djradio(主播电台)/index"));
const WYArtist = React.lazy(() => import("../pages(页面)/discover/child-pages/artist(歌手)/index"));
const WYAlbum = React.lazy(() => import("../pages(页面)/discover/child-pages/album(新碟上架)/index"));

const WYMine = React.lazy(() => import("../pages(页面)/mine/index"));
const WYFriend = React.lazy(() => import("../pages(页面)/friend/index"));
const WYPlayer = React.lazy(() => import("../pages(页面)/player/index"));


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
             <Redirect to='/discover'/>
        )

    },
    {
        path: "/discover",
        component: WYDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                
                // 重定向
                render: () => (
                    <Redirect to='/discover/recommend'/>
                )
            },
            {
                path: "/discover/recommend",
                component: WYRecommend
            },
            {
                path: "/discover/ranking",
                component: WYRanking
            },
            {
                path: "/discover/songs",
                component: WYSongs
            },
            {
                path: "/discover/djradio",
                component: WYDjRadio
            },
            {
                path: "/discover/artist",
                component: WYArtist
            },
            {
                path: "/discover/album",
                component: WYAlbum
            },
            {
                path: "/discover/player",
                component: WYPlayer
            },
        ]
    },
    {
        path: "/mine",
        component: WYMine
    },
    {
        path: "/friend",
        component: WYFriend
    },
];

export default routes