"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function FractalTree() {
  let slider;
  let angle = 0;

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef);
    slider = p5.createSlider(0, p5.TWO_PI, p5.PI / 4, 0.01);
    slider.hide();
  };

  const draw = (p5) => {
    p5.background(0);
    let x = p5.map(p5.sin(angle), -1, 1, 0, 255);
    if (slider) {
      slider.value(x);
    }
    p5.stroke(241, 207, 41);
    p5.translate(150, p5.height);
    branch(p5, 75);
    angle += 0.01;
  };

  function branch(p5, len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 2) {
      p5.push();
      p5.rotate(angle);
      branch(p5, len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(p5, len * 0.67);
      p5.pop();
    }
  }

  if (!isClient) return null;

  return <Sketch setup={setup} draw={draw} />;
}
