import Head from "next/head";
import Link from "next/link";

// title = 'Next App' на тот случай, если title не передан
export function MainLayout ({ children, title = 'Next App' }) {
	return <>
		<Head>
			{/* title по умолчанию */}
			<title>{title}</title>
		</Head>

		<nav>
			<Link href = "/"><a>Home</a></Link>
			<Link href = "/about"><a>About</a></Link>
			<Link href = "/posts"><a>Posts</a></Link>
		</nav>

		<main>
			{children}
		</main>

		<style jsx>{`
			nav {
				position: fixed;
				display: flex;
				justify-content: space-around ;
				align-items: center;

				height: 60px;
				left: 0;
				right: 0;
				top: 0;
				background: darkblue;
			}

			nav a {
				color: white;
				text-decoration: none;
			}

			main {
				margin-top: 60px;
				padding: 1rem;
			}
		`}</style>
	</>
};