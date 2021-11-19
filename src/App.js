import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
			</Switch>
		</div>
	);
}

export default App;
