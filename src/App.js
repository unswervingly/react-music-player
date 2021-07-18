import React, { memo, Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// 使用react-redux库 
import { Provider } from 'react-redux'


import routes from './router(路由)/index';
import store from './store(redux)/index';


import WYAppHeader from './components(共享组件)/app-header/index'
import WYAppFooter from './components(共享组件)/app-footer/index'
import WYAppPlayBar from './pages(页面)/player/app-play-bar/index'


export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <WYAppHeader />
                <Suspense fallback={<div>page loading</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <WYAppFooter />
                <WYAppPlayBar/>
            </HashRouter>
        </Provider>
    )
})
