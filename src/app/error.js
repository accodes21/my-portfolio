"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Something went wrong!</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>
      <button onClick={() => reset()}>Try Again</button>
      <a href="/" style={{ marginLeft: "10px" }}>
        Go Back Home
      </a>
    </div>
  );
}
