import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import BoardContainer from './containers/BoardContainer';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={BoardContainer} />
		<Route path="/about" component={About} />
	</Route>
);
