import type { Metadata } from "next";
import { SanityLive } from "@/sanity/live";
import { SITE_NAME, SITE_DESCRIPTION } from "@/consts";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SiteMain from "@/components/SiteMain";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { AppSettingsProvider } from "@/context";
import { Flex } from "@chakra-ui/react";

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
				<ChakraProvider>
					<AppSettingsProvider>
						<Flex direction="column" minH="100vh" fontFamily="body">
							<SiteHeader />
							<SiteMain flex="1">{children}</SiteMain>
							<SiteFooter />
							<SanityLive />
						</Flex>
					</AppSettingsProvider>
				</ChakraProvider>
			</body>
		</html>
	);
}
