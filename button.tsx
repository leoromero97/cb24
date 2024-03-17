import clsx from "clsx";
import Link from "next/link";

type ButtonLinkPropTypes = {
  href: string;
  title: string;
  text: string;
  variant?: "primary" | "secondary";
};
export default function Button({
  href,
  title,
  text,
  variant = "primary",
}: ButtonLinkPropTypes) {
  return (
    <Link
      href={href}
      title={title}
      className={clsx(
        ` px-4 py-2 rounded-lg font-semibold text-lg text-center w-full max-w-xl transition-colors`,
        variant === "primary" &&
          `text-pink-900 bg-pink-100 hover:bg-pink-200 active:bg-pink-300`,
        variant === "secondary" &&
          `outline text-pink-100 outline-pink-100 bg-transparent hover:outline-pink-300 active:outline-pink-400`,
      )}
    >
      {text}
    </Link>
  );
}
