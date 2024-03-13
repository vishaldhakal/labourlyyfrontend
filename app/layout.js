import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
