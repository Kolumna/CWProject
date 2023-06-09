import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 sm:px-12 shadow flex">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={150} height={100} />
      </Link>
    </header>
  );
}
