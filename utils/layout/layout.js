import { Poppins, Raleway } from "next/font/google";
import "./globals.css"; // Your global styles

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Your Website Title",
  description: "Your website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
