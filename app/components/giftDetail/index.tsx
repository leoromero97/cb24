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
  textCTAprimary: string;
  textCTAsecondary: string;
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
  textCTAprimary,
  textCTAsecondary,
}: GiftDetailPropTypes) {
  return (
    <section className="flex flex-col gap-8 max-w-screen-lg" key={id}>
      <div className="flex w-full gap-4 justify-between items-center">
        <Pill text={size} />
        <span>{conditions}</span>
      </div>
      <picture className="w-full rounded-lg max-w-md h-[400px] overflow-hidden self-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full object-fill h-[600px]"
          width={300}
          height={600}
        />
      </picture>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-xl font-medium">{description}</p>
      <div className="flex flex-col gap-4 w-full items-center">
        <Button
          href={hrefPrimary}
          title={textCTAprimary}
          text={textCTAprimary}
        />
        <Button
          href={hrefSecondary}
          title={textCTAsecondary}
          text={textCTAsecondary}
          variant="secondary"
        />
      </div>
    </section>
  );
}
