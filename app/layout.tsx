import Header from "./components/layout/Header";
import "./globals.css";

export const metadata = {
  title: "Strona główna",
  description: "CWProject to...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-gray-50">
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
