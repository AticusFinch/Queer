import { Roboto } from "@next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Queer Montenegro",
  description: "Montenegrin LGBTIQ Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon/favicon.ico" />
      </head>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
