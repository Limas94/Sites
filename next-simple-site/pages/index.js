import Link from 'next/link';
import Head from 'next/head';

import { MainLayout } from '../components/MainLayout';

export default function Index() {
	return <MainLayout title = "Home">
		<Head>
			<meta name = "keywords" content = "next, js"/>
			<meta name = "description" content = "Некоторое описание сайта"/>
			<meta charSet = "utf-8"/>
		</Head>

		<h1>Hello Next</h1>
		
		<p><Link href = '/about'><a>About</a></Link></p>
		<p><Link href = '/posts'><a>Posts</a></Link></p>
		
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, cum. Natus quaerat fugit minus, consequuntur doloremque sequi ad atque dignissimos?</p>
	</MainLayout>
};