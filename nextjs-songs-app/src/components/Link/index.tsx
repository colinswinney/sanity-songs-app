import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = ({ children, href, ...restProps }: { children: React.ReactNode, href: string, [key: string]: any }) => {
	return (
		<ChakraLink
			asChild
			color="primary"
			css={{ textDecoration: "underline" }}
			_hover={{ textDecorationStyle: "dotted" }}
			_focus={{ outline: "none" }}
			_focusVisible={{ outline: "2px solid" }}
			{...restProps}
		>
			<NextLink href={href}>{children}</NextLink>
		</ChakraLink>
	);
};

export default Link;
