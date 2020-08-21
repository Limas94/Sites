import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import imgCor from './images/image.png';

const handleCountryChange = async (country, setData) => {
	const data = await fetchData(country);
	setData(data);
};

function App() {
	const [data, setData] = useState();
	const [country, setCountry] = useState();

	useEffect(() => {
		async function dataFetch() {
			setData(await fetchData());
		};
		
		dataFetch();
	}, []);

	return ( 
		<div className = {styles.container}>
			<img className = {styles.image} src = {imgCor}/>
			
			{ data ? <Cards data = { data } /> : <h1>...Загрузки</h1> }

			<CountryPicker setData = {setData} setCountry = {setCountry} handleCountryChange = {handleCountryChange} />
			
			{ data ? <Chart data = {data} country = {country} /> : <h1>...Загрузки</h1> }
		</div>
	);
}

export default App;
