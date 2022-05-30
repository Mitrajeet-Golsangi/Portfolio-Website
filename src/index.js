import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoreProjects from './components/MoreProjects/MoreProjects';
import ToTop from './components/topTop/ToTop';
import Posts from "./components/Blog/Posts";

ReactDOM.render(
	<React.StrictMode>
		<ToTop />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="projects" element={<MoreProjects />} />
				<Route path="blogs" element={<Posts />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
