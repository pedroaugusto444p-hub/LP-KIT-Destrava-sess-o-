import { useState, useEffect } from "react";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 38,
    seconds: 32,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to create infinite urgency mockup
          return { hours: 18, minutes: 38, seconds: 32 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div
      id="top-urgency-header"
      className="bg-[#c22e2e] text-white text-center py-2 px-4 text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 shadow-md sticky top-0 z-50 flex justify-center items-center gap-1.5"
    >
      <span id="urgency-text">Esta página sairá do ar em:</span>
      <span
        id="urgency-timer"
        className="font-mono bg-black/20 px-2 py-0.5 rounded text-white border border-white/10"
      >
        {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:
        {formatNumber(timeLeft.seconds)}
      </span>
    </div>
  );
}
