import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bartosz Wiaderek",
	description: "Bartosz Wiaderek",
	verification: {
		google: "mkpkk0-v-7pa07PdOkNYpp4mJJfTaaNzN8TV3hzt6fI",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
