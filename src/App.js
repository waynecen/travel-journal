import "./App.css";
import Header from "./components/Header";
import TravelEntry from "./components/TravelEntry";
import data from "./data";

function App() {
	const entries = data.map((entry) => {
		return (
			<TravelEntry key={entry.id} img={entry.imageUrl} entry={entry} />
		);
	});

	return (
		<div className="App">
			<Header />
			{entries}
		</div>
	);
}

export default App;
