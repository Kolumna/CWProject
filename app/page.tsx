import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-[url('/baner.jpg')] relative bg-cover bg-center h-96 px-12 gap-20 p-8 flex justify-center items-start flex-col">
        <div className="flex flex-col gap-4 z-10">
          <h1 className="text-gray-50 font-bold text-6xl uppercase">
            Dbajmy o naszą planetę
          </h1>
          <h2 className="text-gray-50 font-bold text-3xl uppercase">
            Pomóż nam naprawić świat!
          </h2>
        </div>
        <Link
          href="/panel"
          className="bg-gray-50 hover:bg-gray-200 transition-colors duration-200 text-sm p-4 z-10 px-8 uppercase font-bold rounded-full text-emerald-700"
        >
          Dołącz do nas
        </Link>
        <div className="absolute bg-green-700 w-full h-full left-0 opacity-60"></div>
      </section>

      <section className="flex justify-center items-center flex-col gap-36 px-12 p-8 py-24">
        <div className="text-5xl flex gap-4 justify-between w-full text-neutral-700 font-bold">
          <div className="flex flex-col w-full items-center gap-4 bg-gray-200 p-8 rounded-lg">
            <span className="text-xl font-normal">Ilość śmieci w Polsce</span>
            <span>1000000 kg</span>
          </div>
          <div className="flex flex-col w-full items-center gap-4 bg-gray-200 p-8 rounded-lg">
            <span className="text-xl font-normal">Ilość śmieci w Polsce</span>
            <span>1000000 kg</span>
          </div>
          <div className="flex flex-col w-full items-center gap-4 bg-gray-200 p-8 rounded-lg">
            <span className="text-xl font-normal">Ilość śmieci w Polsce</span>
            <span>1000000 kg</span>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-col items-center gap-24 justify-center px-12 py-24 bg-gray-200">
        <div className="text-5xl text-neutral-700 font-bold">
          Razem posprzątamy świat!
        </div>
        <div className="flex justify-center gap-8 w-full">
          <Image
            className="rounded-xl border-4 border-neutral-50"
            src="/smieci.jpg"
            alt="śmieci"
            width={600}
            height={200}
          />
        </div>
      </section> */}
    </main>
  );
}
