import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Hobbies from "./Hobbies";
import Heading from "./Heading";
import Contact from "./Contact";

export const App = () => {
	return (
		<div className="App">
			<Heading name="Isedin Karamehic" />
      <Hobbies best="Kayaking" outdoor="Running" indoor="Chess" />
      <Contact greeting="Contact me" callToAction="Schedule a meeting" />
		</div>
	);
};

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

