import { Html, Head, Main, NextScript } from "next/document";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "About | Avin Lad"
};

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon-light.svg" media="(prefers-color-scheme: light)"></link>
                <link rel="icon" href="/favicon-dark.svg" media="(prefers-color-scheme: dark)"></link>
            </Head>
            <body className="">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
