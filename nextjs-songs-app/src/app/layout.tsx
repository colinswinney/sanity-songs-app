import type { Metadata } from "next";
import { SanityLive } from "@/sanity/live";
import "./styles/index.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/consts";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SiteMain from "@/components/SiteMain";

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
				<SiteHeader />
				<SiteMain>
					{children}
				</SiteMain>
				<SiteFooter />
				<SanityLive />
			</body>
		</html>
	);
}
