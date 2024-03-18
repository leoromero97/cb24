import Pill from "../components/pill";

export default function GiftPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-slate-900 text-pink-100">
      <section className="flex flex-col gap-8 w-full items-center justify-center h-full flex-1">
        <div className="flex items-center justify-center w-80 h-w-80 text-center bg-black rounded-md animate-wiggle">
          <h1 className="font-bold text-[220px] text-pink-50">?</h1>
        </div>
        <Pill text="Mediano" />
        <p className="font-bold text-green-400">
          <span className="text-slate-100 font-light line-through">Llega el sábado 23/03</span>
          <span className="ml-2">Llega el martes 19/03 por la mañana</span>
        </p>
      </section>
    </main>
  );
}
