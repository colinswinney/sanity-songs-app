import { Container } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SiteContainer({ children, ...restProps }: { children: React.ReactNode, [key: string]: any }) {
	return (
		<Container fluid maxW="5xl" {...restProps}>
			{children}
		</Container>
	);
}
