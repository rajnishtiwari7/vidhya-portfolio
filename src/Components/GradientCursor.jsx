import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        className="hidden lg:block fixed top-0 left-0 w-4 h-4 md:w-5 md:h-5 rounded-full pointer-events-none z-[9999]
                   bg-gradient-to-r from-purple-500 via-blue-500 to-sky-400
                   animate-gradient-slide opacity-90 blur-[2px] shadow-lg
                   transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`,
        }}
      ></div>
    </>
  );
}
