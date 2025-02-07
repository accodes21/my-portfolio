import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Oops! Page Not Found.</h2>
        <p className="text-gray-300">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="text-gray-400">
          Meanwhile, check out some photos clicked by me.
        </p>
      </div>

      <div
        className="slider mt-6 rounded-lg shadow-lg"
        style={{
          "--width": "300px",
          "--height": "533.3px",
          "--quantity": 9,
        }}
      >
        <div className="list">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="item" style={{ "--position": i + 1 }}>
              <img
                src={`images/${i + 1}.jpg`}
                alt={`Photo ${i + 1}`}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6">
        <Link href="/" className="font-semibold">
          ⬅ Return Home
        </Link>
      </p>
    </div>
  );
}
