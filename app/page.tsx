"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function getRandomDate() {
  const start = new Date(1995, 5, 16);
  const end = new Date();
  const random = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  const yyyy = random.getFullYear();
  const mm = String(random.getMonth() + 1).padStart(2, "0");
  const dd = String(random.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center mb-2">
          Summerproject Kodehode 2025- NASA Picture of the Day
        </h1>
      </header>
      <Link
        href="/apod"
        className="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors animate-fade-in mb-4"
      >
        Today´s Date
      </Link>
      <button
        className="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors animate-fade-in"
        onClick={() => router.push(`/apod/${getRandomDate()}`)}
      >
        Random Date
      </button>
    </div>
  );
}
