/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading as ChakraHeading } from "@chakra-ui/react";

export function H1({
	children,
	...restProps
}: {
	children: React.ReactNode;
	[key: string]: any;
}) {
	return (
		<ChakraHeading as="h1" size="4xl" {...restProps}>
			{children}
		</ChakraHeading>
	);
}

export function H2({
	children,
	...restProps
}: {
	children: React.ReactNode;
	[key: string]: any;
}) {
	return (
		<ChakraHeading as="h2" size="2xl"  {...restProps}>
			{children}
		</ChakraHeading>
	);
}

export function H3({
	children,
	...restProps
}: {
	children: React.ReactNode;
	[key: string]: any;
}) {
	return (
		<ChakraHeading as="h3" size="xl" {...restProps}>
			{children}
		</ChakraHeading>
	);
}

export function H4({
	children,
	...restProps
}: {
	children: React.ReactNode;
	[key: string]: any;
}) {
	return (
		<ChakraHeading as="h4" size="lg" {...restProps}>
			{children}
		</ChakraHeading>
	);
}

export function H5({
	children,
	...restProps
}: {
	children: React.ReactNode;
	[key: string]: any;
}) {
	return (
		<ChakraHeading as="h5" size="md" {...restProps}>
			{children}
		</ChakraHeading>
	);
}

export function H6({
	children,
	...restProps
}: {
	children: React.ReactNode;
	[key: string]: any;
}) {
	return (
		<ChakraHeading as="h6" size="sm" {...restProps}>
			{children}
		</ChakraHeading>
	);
}
