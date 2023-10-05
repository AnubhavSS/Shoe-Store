
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

import { Providers } from "../../store/provider";

export const metadata = {
  title: "Shoe Street",
  description: "A place were you get shoes of your choice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers >
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
