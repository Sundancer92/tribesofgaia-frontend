import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Redux Store
import { Provider } from "react-redux";
import {store} from "./store/store";

import { BrowserRouter } from "react-router-dom";
// ROBOTO
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
