import { MainLayout } from "../components/MainLayout";
import styles from '../styles/error.module.scss';

import Link from "next/link";

export default function ErrorPage() {
	return <MainLayout>
		<h1 className = {styles.error}>Ошибка 404</h1>
		
		<p>Вернуться <Link href = '/'><a>обратно</a></Link></p>
	</MainLayout>
};