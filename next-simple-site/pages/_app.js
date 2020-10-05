import NextNprogress from 'nextjs-progressbar';
import '../styles/main.scss';

// В данном файле можно добавить глобальные стили и тд.
export default function MyApp({ Component, pageProps }) {
  	return <>
	  	{/* Лоадинг на странице */}
	  	<NextNprogress
			color = "#29D"
			startPosition = "0.3"
			stopDelayMs = "200"
			height = "3"
		/>

	  	<Component {...pageProps} />
	</>
}; 