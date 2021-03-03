import React from 'react';
import ReactDom from 'react-dom';
import News from '../../react/news'
// import { BrowserRouter, Route } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import routes from '../Routes';
// import { getClientStore } from '../store';
// import { Provider } from 'react-redux';

// const store = getClientStore();

// 这个留待后面要加路由再加 ssr的框架已经搭起来了。
const App = () => {
	return (
		// <Provider store={store}>
			// <BrowserRouter>
				<div>
					{/* {renderRoutes(routes)} */}
                    <News />
	    	    </div>
			// {/* </BrowserRouter> */}
		// </Provider>
	)
}

ReactDom.hydrate(<News />, document.getElementById('root'))
// ReactDom.render(<App />, document.getElementById('root'))