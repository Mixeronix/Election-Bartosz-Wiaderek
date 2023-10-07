import "./globals.css";
import { Inter } from "next/font/google";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Bartosz Wiaderek",
	description: "Bartosz Wiaderek portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
<Head>
<meta name="google-site-verification" content="mkpkk0-v-7pa07PdOkNYpp4mJJfTaaNzN8TV3hzt6fI" />
			</Head>

<body className={inter.className}>{children}</body>
		</html>
	);
}
