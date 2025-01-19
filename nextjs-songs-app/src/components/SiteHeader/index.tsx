"use client";

import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun, LuSettings } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Flex, List } from "@chakra-ui/react";
import Link from "@/components/Link";
import SiteContainer from "@/components/SiteContainer";
import ChordDisplayAs from "@/components/AppSettings";

import { Button } from "@/components/ui/button";
import {
	DrawerBackdrop,
	DrawerBody,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerRoot,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

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
					<Flex gap={2}>
						<IconButton
							onClick={toggleColorMode}
							variant="outline"
							size="md"
							aria-label="Toggle color mode"
							color="primary"
							rounded="full"
							_hover={{ borderColor: "primary" }}
						>
							{colorMode === "light" ? <LuSun /> : <LuMoon />}
						</IconButton>

						<DrawerRoot size="sm">
							<DrawerBackdrop />
							<DrawerTrigger asChild>
								<IconButton
									variant="outline"
									size="md"
									aria-label="Open Settings Menu"
									color="primary"
									rounded="full"
									_hover={{ borderColor: "primary" }}
								>
									<LuSettings />
								</IconButton>
							</DrawerTrigger>
							<DrawerContent>
								<DrawerHeader>
									<DrawerTitle>Settings</DrawerTitle>
								</DrawerHeader>
								<DrawerBody>
									<ChordDisplayAs />
								</DrawerBody>
								<DrawerFooter>
									<Button>Save</Button>
								</DrawerFooter>
								<DrawerCloseTrigger />
							</DrawerContent>
						</DrawerRoot>
					</Flex>
				</Flex>
			</SiteContainer>
		</Box>
	);
}
