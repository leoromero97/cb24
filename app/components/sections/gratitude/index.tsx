import { ASSETS } from "@/app/constants/assets";
import clsx from "clsx";
import Image from "next/image";

export type SectionPropTypes = {
  className?: string;
};

export default function GratitudeSection({ className }: SectionPropTypes) {
  return (
    <section
      className={clsx(
        "flex flex-col items-center gap-10 text-center max-w-screen-lg",
        className
      )}
    >
      <Image
        src={ASSETS.gratitude.src}
        alt={ASSETS.gratitude.alt}
        className="max-w-lg w-full rounded-lg"
      />
      <h3 className="text-3xl font-semibold">Solo me queda dar las gracias</h3>
      <p className="text-xl font-medium">
        ¿Por qué? Porque sos la persona más importante en mi vida, la que está
        en las buenas y en las malas, donde me quiero quedar el resto de mi
        vida, porque tus abrazos son mi hogar, tus besos mi droga y tu amor
        felicidad
      </p>
      <p className="text-xl font-medium">
        Gracias por ser como sos, te amo hasta el infinito y más allá 🪐
      </p>
    </section>
  );
}
