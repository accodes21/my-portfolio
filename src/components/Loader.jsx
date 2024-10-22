import React, { useRef, useEffect } from "react";

const Loader = () => {
  const path = useRef();
  const loader = useRef();
  const initialCurve = 250;
  const duration = 300;
  let start;

  useEffect(() => {
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 115);
  }, []);

  const animate = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    loader.current.style.top =
      easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  };

  const setPath = (curve) => {
    const width = window.innerWidth;
    const height = loaderHeight();
    path.current.setAttributeNS(
      null,
      "d",
      `M0 0
    L${width} 0
    L${width} ${height}
    Q${width / 2} ${height - curve} 0 ${height}
    L0 0`
    );
  };

  return (
    <div ref={loader} className="loader w-full fixed z-10">
      <svg className="h-full w-full">
        <path
          ref={path}
          className="stroke-[#f1cf29] stroke-1 fill-[#f1cf29]"
        ></path>
      </svg>
    </div>
  );
};

export default Loader;
