"use client";

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Flex, List } from "@chakra-ui/react";
import Link from "@/components/Link";
import SiteContainer from "@/components/SiteContainer";

export default function Header() {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Box as="header" py="4">
			<SiteContainer>
				<Flex justify="space-between" align="center">
					<Box as="nav" aria-label="Primary">
						<List.Root flexDirection="row" gap="4" listStyle="none">
							<List.Item>
								<Link href="/">Home</Link>
							</List.Item>
							<List.Item>
								<Link href="/songs">Songs</Link>
							</List.Item>
							<List.Item>
								<Link href="/artists">Artists</Link>
							</List.Item>
						</List.Root>
					</Box>
					<ClientOnly fallback={<Skeleton boxSize="8" />}>
						<IconButton
							onClick={toggleColorMode}
							variant="plain"
							size="md"
							aria-label="Toggle color mode"
							color="primary"
							rounded="full"
						>
							{colorMode === "light" ? <LuSun /> : <LuMoon />}
						</IconButton>
					</ClientOnly>
				</Flex>
			</SiteContainer>
		</Box>
	);
}
