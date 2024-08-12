"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Cardioid() {
  let r;
  let factor = 0;

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef);
    r = p5.height / 2 - 16;
  };

  //   function map(value, start1, stop1, start2, stop2) {
  //     return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  //   }

  function getVector(p5, index, total) {
    const angle = p5.map(index % total, 0, total, 0, p5.TWO_PI);
    const v = p5.createVector(Math.cos(angle + p5.PI), Math.sin(angle + p5.PI));
    v.mult(r);
    return v;
  }

  const draw = (p5) => {
    p5.background(0);
    const total = 200;
    factor += 0.006;
    if (factor >= 14) {
      factor = 0;
    }

    p5.translate(p5.width / 2, p5.height / 2);
    p5.stroke(255, 150);
    p5.strokeWeight(2);
    p5.noFill();
    p5.ellipse(0, 0, r * 2);

    p5.strokeWeight(1);
    for (let i = 0; i < total; i++) {
      const a = getVector(p5, i, total);
      const b = getVector(p5, i * factor, total);
      p5.stroke((total - i) % 256, 255, 255);
      p5.line(a.x, a.y, b.x, b.y);
    }
  };

  if (!isClient) return null;

  return <Sketch setup={setup} draw={draw} />;
}
