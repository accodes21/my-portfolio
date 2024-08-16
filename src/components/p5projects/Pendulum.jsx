"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Pendulum() {
  let r1 = 75;
  let r2 = 75;
  let m1 = 5;
  let m2 = 5;
  let a1 = 0;
  let a2 = 0;
  let a1_v = 0;
  let a2_v = 0;
  let g = 1.125;

  let px2 = -1;
  let py2 = -1;
  let cx, cy;

  let buffer;

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef);
    p5.pixelDensity(1);
    a1 = p5.PI / 2;
    a2 = p5.PI / 2;
    cx = 150;
    cy = 100;
    buffer = p5.createGraphics(p5.width, p5.height);
    buffer.background(0);
    buffer.translate(cx, cy);
  };

  const draw = (p5) => {
    p5.background(255);
    p5.imageMode(p5.CORNER);
    p5.image(buffer, 0, 0, p5.width, p5.height);

    let num1 = -g * (2 * m1 + m2) * p5.sin(a1);
    let num2 = -m2 * g * p5.sin(a1 - 2 * a2);
    let num3 = -2 * p5.sin(a1 - a2) * m2;
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * p5.cos(a1 - a2);
    let den = r1 * (2 * m1 + m2 - m2 * p5.cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;

    num1 = 2 * p5.sin(a1 - a2);
    num2 = a1_v * a1_v * r1 * (m1 + m2);
    num3 = g * (m1 + m2) * p5.cos(a1);
    num4 = a2_v * a2_v * r2 * m2 * p5.cos(a1 - a2);
    den = r2 * (2 * m1 + m2 - m2 * p5.cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

    p5.translate(cx, cy);
    p5.stroke(255);
    p5.strokeWeight(2);

    let x1 = r1 * p5.sin(a1);
    let y1 = r1 * p5.cos(a1);

    let x2 = x1 + r2 * p5.sin(a2);
    let y2 = y1 + r2 * p5.cos(a2);
    p5.strokeWeight(2);
    p5.line(0, 0, x1, y1);
    p5.fill(0);
    p5.ellipse(x1, y1, m1 * 2, m1 * 2);

    p5.line(x1, y1, x2, y2);
    p5.fill(0);
    p5.ellipse(x2, y2, m2 * 2, m2 * 2);

    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;

    buffer.stroke(241, 207, 41);
    if (p5.frameCount > 1) {
      p5.stroke(241, 207, 41);
      p5.strokeWeight(0.5);
      buffer.line(px2, py2, x2, y2);
    }

    px2 = x2;
    py2 = y2;
  };

  if (!isClient) return null;

  return <Sketch setup={setup} draw={draw} />;
}
