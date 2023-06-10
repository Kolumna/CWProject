import Historia from "../components/postepy/Historia";
import Mapa from "../components/postepy/Mapa";

export default function Postepy() {
  return (
    <section className="px-12 p-8">
      <div className="flex justify-center flex-col items-center gap-12">
        <span className="badge">mapa postępów</span>
        <Mapa />
        <span className="badge bg-slate-200">historia</span>
        <Historia />
      </div>
    </section>
  );
}
