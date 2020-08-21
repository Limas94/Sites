import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api';

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		async function dataFetch() {
			setData(await fetchData());
		};
		
		dataFetch();
	}, []);

	return ( 
		<div className = {styles.container}>
			<Cards data = {data} />
		
			<Chart/>
			
			<CountryPicker/>
		</div>
	);
}

export default App;
