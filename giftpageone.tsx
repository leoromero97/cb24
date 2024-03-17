import Image from "next/image";
import { GIFTS } from "../constants/gifts";
import Pill from "../components/pill";
import Button from "../components/button";

export default function GiftPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-slate-900 text-pink-100">
      <section
        className="flex flex-col gap-5 max-w-screen-lg"
        key={GIFTS.gift1.id}
      >
        <div className="flex w-full gap-4 justify-between items-center">
          <Pill text={GIFTS.gift1.size} />
          <span>{GIFTS.gift1.conditions}</span>
        </div>
        <Image
          src={GIFTS.gift1.imageSrc}
          alt={GIFTS.gift1.imageAlt}
          className="max-w-7xl w-full rounded-lg"
        />
        <h1 className="text-3xl font-semibold">{GIFTS.gift1.title}</h1>
        <p className="text-xl font-medium">{GIFTS.gift1.description}</p>

        <Button
          href="/gift-two"
          title="Ver segundo regalo"
          text="Ver segundo regalo"
        />
        <Button
          href="/"
          title="Volver al inicio"
          text="Volver al inicio"
          variant="secondary"
        />
      </section>
    </main>
  );
}
