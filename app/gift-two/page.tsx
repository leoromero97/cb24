import { GIFTS } from "../constants/gifts";
import GiftDetail from "../components/giftDetail";

export default function GiftPage() {
  const {
    conditions,
    description,
    id,
    imageAlt,
    imageSrc,
    size,
    title,
    hrefPrimary,
    hrefSecondary,
    textCTAprimary,
    textCTAsecondary,
  } = GIFTS.gift2;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-slate-900 text-pink-100">
      <GiftDetail
        conditions={conditions}
        description={description}
        hrefPrimary={hrefPrimary}
        hrefSecondary={hrefSecondary}
        id={id}
        imageAlt={imageAlt}
        imageSrc={imageSrc.src}
        size={size}
        title={title}
        textCTAprimary={textCTAprimary}
        textCTAsecondary={textCTAsecondary}
      />
    </main>
  );
}
