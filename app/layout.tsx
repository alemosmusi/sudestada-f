import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "Sudestada Escuela de Surf",
  description: "Escuela de surf y SUP",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-sky-50 antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
