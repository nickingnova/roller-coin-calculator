import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import {Home, coins}  from './pages/Home';


function App(){
	return(
		<BrowserRouter>
			<Layout coins={coins}>
			<Switch>
				<Route path="/roller-coin-calculator/" component={Home} />
			</Switch>
			</Layout>
		</BrowserRouter>
	)
}

export default App;