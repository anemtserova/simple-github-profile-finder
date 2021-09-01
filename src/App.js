import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/pages/Home';
import User from './Components/Users/User';

import Alert from './Components/Layout/Alert';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';

import GithubState from './Context/github/GithubState';
import AlertState from './Context/alert/AlertState';

import './App.css';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar />
						<div className="container">
							<Alert alert={alert} />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/user/:login" component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
