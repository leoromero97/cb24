import { ASSETS } from "@/app/constants/assets";
import Image from "next/image";

export default function GratitudeSection() {
  return (
    <section className="flex flex-col items-center gap-10 text-center max-w-screen-lg">
      <Image
        src={ASSETS.gratitude.src}
        alt={ASSETS.gratitude.alt}
        className="max-w-lg w-full"
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