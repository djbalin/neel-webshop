export default function NyhedBurst({
  className = "",
  label = "Nyhed",
}: {
  className?: string;
  label?: string;
}) {
  const spikes = 12;
  const outer = 48;
  const inner = 37;
  const coords: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    coords.push(
      `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`
    );
  }
  return (
    <div
      className={`z-20 h-24 w-24 rotate-[8deg] drop-shadow-lg sm:h-28 sm:w-28 ${className}`}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon
          points={coords.join(" ")}
          fill="#39B6FF"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute inset-0 flex -rotate-[8deg] items-center justify-center text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
        {label}
      </span>
    </div>
  );
}
