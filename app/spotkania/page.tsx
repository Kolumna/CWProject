import Post from "../components/spotkania/Post";

export default function Spotkania() {
  return (
    <section className="px-12 p-8">
      <div className="grid grid-cols-3 gap-8">
        <Post
          title="Sprzątanie plaży"
          location="Stegna, Pomorskie"
          image="smieci_na_plazy.jpg"
          date="10 czerwca"
        />

        <Post
          title="Sprzątanie gór"
          location="Zakopane, Małopolskie"
          image="smieci_w_gorach.jpg"
          date="12 czerwca"
        />
      </div>
    </section>
  );
}
