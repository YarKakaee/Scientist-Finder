import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import DatabasePage from "./components/pages/DatabasePage/DatabasePage";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/all-scientists" component={DatabasePage} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
