import '../styles/main.scss';

// В данном файле можно добавить глобальные стили и тд.
export default function MyApp({ Component, pageProps }) {
  	return <>
	  	<Component {...pageProps} />
	</>
};