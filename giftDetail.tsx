import Image from "next/image";
import Pill from "../pill";
import Button from "../button";

export type GiftDetailPropTypes = {
  id: string;
  size: string;
  conditions: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  hrefPrimary: string;
  hrefSecondary: string;
};

export default function GiftDetail({
  id,
  size,
  conditions,
  imageSrc,
  imageAlt,
  title,
  description,
  hrefPrimary,
  hrefSecondary,
}: GiftDetailPropTypes) {
  return (
    <section className="flex flex-col gap-5 max-w-screen-lg" key={id}>
      <div className="flex w-full gap-4 justify-between items-center">
        <Pill text={size} />
        <span>{conditions}</span>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="max-w-7xl w-full rounded-lg"
      />
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-xl font-medium">{description}</p>

      <Button
        href={hrefPrimary}
        title="Ver segundo regalo"
        text="Ver segundo regalo"
      />
      <Button
        href={hrefSecondary}
        title="Volver al inicio"
        text="Volver al inicio"
        variant="secondary"
      />
    </section>
  );
}
