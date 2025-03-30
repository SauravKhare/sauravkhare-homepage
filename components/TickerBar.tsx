import Marquee from "react-fast-marquee";

export default function TickerBar() {
  return (
    <Marquee
      className="text-red-700 font-normal text-base font-space-grotesk bg-yellow-500 py-1"
      speed={80}
    >
      Hey 👋 calling all awesome companies! I&apos;m now open to new
      opportunities. Last working day at current employer is 29th July 2024.
    </Marquee>
  );
}
