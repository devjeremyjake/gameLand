import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.component';
import Home from './pages/Home/Home';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
