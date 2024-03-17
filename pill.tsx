type PillPropTypes = {
  text: string;
};
export default function Pill({ text }: PillPropTypes) {
  return (
    <small className="w-fit py-1 px-2 bg-pink-200 text-pink-900 rounded-full text-center text-sm font-semibold outline-pink-900 outline-1">
      {text}
    </small>
  );
}
