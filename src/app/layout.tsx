//src/app/layout.tsx

import { Provider } from "@/components/ui/provider";

import type { Metadata } from "next";
import "./globals.css";
const title = "Domain Shopping Cart";
const description = "Domain Shopping Cart";
const url = "https://domain-shopping.vercel.app/";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    type: "website",
    siteName: "Domain Shopping Cart"
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description
  }
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning suppressContentEditableWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
