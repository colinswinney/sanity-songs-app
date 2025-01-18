import { Box } from "@chakra-ui/react";
import SiteContainer from "../SiteContainer";

export default function SiteFooter() {
	const currentYear = new Date().getFullYear();

	return (
		<Box as="footer" py="4" textAlign="center">
			<SiteContainer>
				<p>&copy; {currentYear}</p>
			</SiteContainer>
		</Box>
	);
}
