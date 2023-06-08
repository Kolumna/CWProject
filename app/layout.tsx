import Image from "next/image";
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
      <body className="bg-neutral-50">
        <header className="p-4 sm:px-12 shadow">
          <div>
            <Image src="/logo.svg" alt="logo" width={150} height={100} />
          </div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
