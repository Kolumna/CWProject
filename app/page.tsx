export default function Home() {
  return (
    <main>
      <section className="bg-emerald-700 h-96 px-12 gap-20 p-8 flex justify-center items-start flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-neutral-50 font-bold text-6xl uppercase">
            Dbajmy o naszą planetę
          </h1>
          <h2 className="text-neutral-50 font-bold text-3xl uppercase">
            Pomóż nam naprawić świat!
          </h2>
        </div>
        <button className="bg-neutral-50 p-4 px-6 uppercase font-bold rounded-full text-emerald-700">
          Dołącz do nas
        </button>
      </section>
    </main>
  );
}
