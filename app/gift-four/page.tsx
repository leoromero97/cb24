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
  } = GIFTS.gift3;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-slate-900 text-pink-100">
    <section className="flex flex-col gap-8 w-full items-center justify-center" key={id}>
      <div className="flex items-center w-28 h-28 text-center bg-black">
        <h1 className="font-bold text-9xl text-pink-50">?</h1>
      </div>
    </section>
    </main>
  );
}
