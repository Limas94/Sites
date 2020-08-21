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
			{
				data ? <Cards data = { data } /> : <h1>Тут бует лоадер</h1>
			}
		
			{/* <Chart/> */}
			
			{/* <CountryPicker/> */}
		</div>
	);
}

export default App;
