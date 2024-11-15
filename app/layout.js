import localFont from "next/font/local";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google"; // Correct the import name
import Provider from './provider';

export const metadata = {
  title: "NotexAi",
  description: "NotexAi",
};

// Initialize the font properly
const font = Bricolage_Grotesque({
  subsets: ["latin"], // Correct the subsets syntax
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
