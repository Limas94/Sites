import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';

export default function Posts({ posts }) {
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	async function load() {
	// 		const response = await fetch('http://localhost:4200/posts');
			
	// 		const json = await response.json();
			
	// 		setPosts(json);
	// 	};

	// 	load();
	// }, [setPosts]);

	return <MainLayout title = "Posts">
		<h1>Posts Page</h1>

		<ul>
			{posts.map(post => (
				<li key = {post.id}>
					{/* Что бы убрать перезагрузку надо явно указать, куда переходим */}
					<Link href = {`/post/[id]`} as = {`/post/${post.title}`}>
						<a>{post.title}</a>
					</Link>
				</li>
			))}
		</ul>
	</MainLayout>
};

// Для генерации статики на сервере
Posts.getInitialProps = async (ctx) => {
	const response = await fetch('http://localhost:4200/posts');
	const posts = await response.json();
	
	return { posts }
};