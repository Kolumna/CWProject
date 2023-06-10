import Post from "../components/spotkania/Post";

export default function Spotkania() {
  return (
    <section className="px-12 p-8">
      <div className="grid grid-cols-3 gap-8">
        <Post
          title="Sprzątanie plaży"
          location="Stegna, Pomorskie"
          date="10 czerwca"
          className="bg-[url('/smieci_na_plazy.jpg')]"
        />

        <Post
          title="Sprzątanie gór"
          location="Zakopane, Małopolskie"
          date="12 czerwca"
          className="bg-[url('/smieci_w_gorach.jpg')]"
        />
      </div>
    </section>
  );
}
