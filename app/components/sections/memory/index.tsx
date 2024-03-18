import { ASSETS } from "@/app/constants/assets";
import Image from "next/image";

export default function MemorySection() {
  return (
    <section className="flex flex-col items-center gap-10 text-center max-w-screen-lg">
      <Image
        src={ASSETS.memory.src}
        alt={ASSETS.memory.alt}
        className="max-w-lg w-full rounded-lg"
      />
      <h2 className="text-3xl font-semibold">Otro cumpleañito juntos</h2>
      <p className="text-xl font-medium">
        Pasaron <span className="text-pink-300 font-bold">2.192</span> días
        desde el primer cumpleaños en el que estuve, miles de abrazos, miles de
        besos, y cientos de momentos juntos, desde salidas hasta vacaciones,
        para mi cada momento con vos es el más lindo y quiero tener miles más
      </p>
    </section>
  );
}
