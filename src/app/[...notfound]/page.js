import { notFound } from "next/navigation";

export default function CatchAll() {
  notFound(); // Triggers the Next.js 404 page
}
