import React, { useState } from "react";
import dynamic from "next/dynamic";

const FractalTree = dynamic(
  () => import("@/components/p5projects/FractalTree"),
  {
    ssr: false,
  }
);
const Phyllotaxis = dynamic(
  () => import("@/components/p5projects/Phyllotaxis"),
  {
    ssr: false,
  }
);
const Cardioid = dynamic(() => import("@/components/p5projects/Cardioid"), {
  ssr: false,
});
const Pendulum = dynamic(() => import("@/components/p5projects/Pendulum"), {
  ssr: false,
});

export default function P5Project() {
  const [choice, setChoice] = useState(0);
  const [loading, setLoading] = useState(false);

  const components = [
    <FractalTree key="fractal" />,
    <Phyllotaxis key="phyllotaxis" />,
    <Cardioid key="cardioid" />,
    <Pendulum key="pendulum" />,
  ];
  const handleChoiceChange = () => {
    setLoading(true);
    const newChoice = (choice + 1) % components.length;

    setTimeout(() => {
      setChoice(newChoice);
      setLoading(false);
    }, 750);
  };
  return (
    <div className="flex flex-col">
      <div
        className="cursor-pointer p-1 rounded-md border border-black hover:border hover:border-[#f1cf29]/60  transition-all"
        onClick={handleChoiceChange}
      >
        {loading ? (
          <div className="text-xl flex justify-center items-center w-[300px] h-[300px]">
            Loading...
          </div>
        ) : (
          components[choice]
        )}
      </div>
      <p
        className="text-center text-sm cursor-pointer text-slate-300 hover:text-slate-100 transition-colors"
        onClick={handleChoiceChange}
      >
        Click to explore more
      </p>
    </div>
  );
}
