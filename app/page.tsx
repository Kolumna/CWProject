import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-[url('/baner.jpg')] relative bg-cover bg-center h-96 px-12 gap-20 p-8 flex justify-center items-start flex-col">
        <div className="flex flex-col gap-4 z-10">
          <h1 className="text-neutral-50 font-bold text-6xl uppercase">
            Dbajmy o naszą planetę
          </h1>
          <h2 className="text-neutral-50 font-bold text-3xl uppercase">
            Pomóż nam naprawić świat!
          </h2>
        </div>
        <Link href="/panel" className="bg-neutral-50 hover:bg-neutral-200 transition-colors duration-200 text-sm p-4 z-10 px-8 uppercase font-bold rounded-full text-emerald-700">
          Dołącz do nas
        </Link>
        <div className="absolute bg-green-700 w-full h-full left-0 opacity-60"></div>
      </section>
    </main>
  );
}
