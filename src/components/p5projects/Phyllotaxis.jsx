"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Phyllotaxis() {
  let n = 0;
  let c = 5;

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSB);
    p5.background(0);
  };

  const draw = (p5) => {
    let a = n * 137.5;
    let r = c * p5.sqrt(n);

    let x = r * p5.cos(a) + p5.width / 2;
    let y = r * p5.sin(a) + p5.height / 2;

    p5.fill((a - r) % 360, 360, 360);
    // fill(255);
    p5.noStroke();
    p5.ellipse(x, y, 5, 5);
    n++;
  };

  if (!isClient) return null;

  return <Sketch setup={setup} draw={draw} />;
}
