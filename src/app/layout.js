import {Saira_Condensed} from "next/font/google";
import "./globals.css";

const font = Saira_Condensed({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"]
})


export const metadata = {
  title: "Mayor's Portfolio",
  description: "Front End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#f4f1ea]`}
      >
        {children}
      </body>
    </html>
  );
}
