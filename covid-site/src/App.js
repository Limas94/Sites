import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api';

const handleCountryChange = async (country, setData) => {
	const data = await fetchData(country);
	setData(data);
};

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

			<CountryPicker setData = {setData} handleCountryChange = {handleCountryChange} />
		
			<Chart/>			
		</div>
	);
}

export default App;
