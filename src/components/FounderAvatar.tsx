interface Props {
  name: string;
  initial: string;
  imageUrl?: string;
}

export function FounderAvatar({ name, initial, imageUrl }: Props) {
  return (
    <div className="mx-auto grid h-[156px] w-[156px] place-items-center rounded-full neu-raised-sm">
      <div
        className="relative grid h-[140px] w-[140px] place-items-center overflow-hidden rounded-full"
        style={{
          background: "linear-gradient(135deg,#e0ddd7 0%,#eceae5 50%,#d8d5ce 100%)",
          boxShadow: "inset 6px 6px 12px #d4d0c8, inset -6px -6px 12px #f5f3ef",
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="font-display text-[3.5rem] text-[#111827]">{initial}</span>
        )}
      </div>
    </div>
  );
}
