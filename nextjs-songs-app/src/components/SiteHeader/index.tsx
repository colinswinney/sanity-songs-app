import Link from 'next/link';
import styles from "./styles.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<nav aria-label="Primary">
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/songs">Songs</Link>
					</li>
					<li>
						<Link href="/artists">Artists</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
