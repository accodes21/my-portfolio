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

export default function P5Project() {
  const [choice, setChoice] = useState(0);
  const [loading, setLoading] = useState(false);

  const components = [
    <FractalTree key="fractal" />,
    <Phyllotaxis key="phyllotaxis" />,
    <Cardioid key="cardioid" />,
  ];
  const handleChoiceChange = () => {
    setLoading(true);
    let newChoice;
    do {
      newChoice = Math.floor(Math.random() * components.length);
    } while (newChoice === choice);

    setChoice(newChoice);

    setTimeout(() => {
      setChoice(newChoice);
      setLoading(false);
    }, 750);
  };
  return (
    <div
      className="cursor-pointer p-1 rounded-md border border-black hover:border hover:border-[#f1cf29]/60  transition-all"
      onClick={handleChoiceChange}
    >
      {loading ? (
        <div className="text-xl text-center w-[300px]">Loading...</div>
      ) : (
        components[choice]
      )}
    </div>
  );
}
