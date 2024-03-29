import { ASSETS } from "@/app/constants/assets";
import clsx from "clsx";
import Image from "next/image";
import { SectionPropTypes } from "../gratitude";

export default function VirtuesSection({ className }: SectionPropTypes) {
  return (
    <section
      className={clsx(
        "flex flex-col items-center gap-10 text-center max-w-screen-lg",
        className
      )}
    >
      <Image
        src={ASSETS.virtues.src}
        alt={ASSETS.virtues.alt}
        className="max-w-lg w-full rounded-lg"
      />
      <h2 className="text-3xl font-semibold">
        Me pone muy feliz estar con vos
      </h2>
      <p className="text-xl font-medium">
        Una mujer que se esfuerza día a día, que no necesita ayuda de nadie
        porque tiene el poder de hacer lo que se proponga, me pone orgullose
        tener una novia hermosa, sensible, trabajadora, coquette, perrisima,
        inteligente y confidente
      </p>
    </section>
  );
}
