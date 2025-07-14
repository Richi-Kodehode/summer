"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DatePicker from "./components/DatePicker";

function getRandomDate() {
  const start = new Date(1995, 5, 16); // June 16, 1995
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
      <header className="mb-12 animate-fade-in text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Welcome to the NASA Explorer
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Discover the universe with NASA&apos;s Open API. Explore stunning
          space imagery from the past three decades.
        </p>
      </header>

      <div className="w-full max-w-2xl mb-12">
        <DatePicker />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <Link
          href="/apod"
          className="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 text-lg"
        >
          Picture of the Day
        </Link>
        <button
          className="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 text-lg"
          onClick={() => router.push(`/apod/${getRandomDate()}`)}
        >
          Random Picture of the Day
        </button>
      </div>

      <footer className="mt-16 text-center text-gray-400 text-sm">
        <p>Powered by NASA&apos;s Astronomy Picture of the Day API</p>
        <p className="mt-2">Images from June 16, 1995 to present</p>
      </footer>
    </div>
  );
}
