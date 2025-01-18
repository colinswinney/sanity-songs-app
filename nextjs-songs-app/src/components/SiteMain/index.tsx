import { Box } from "@chakra-ui/react";
import SiteContainer from "../SiteContainer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SiteMain({ children, ...restProps }: { children: React.ReactNode, [key: string]: any }) {
	return (
		<Box as="main" py="4" {...restProps}>
			<SiteContainer>{children}</SiteContainer>
		</Box>
	);
}
