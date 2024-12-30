import type { Metadata } from "next";
import { SanityLive } from "@/sanity/live";
import "./styles/index.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/consts";

export const metadata: Metadata = {
	title: SITE_NAME,
	description: SITE_DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body>
				{children}
				<SanityLive />
			</body>
		</html>
	);
}
