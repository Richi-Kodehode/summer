"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NasaImageCard from "../components/NasaImageCard";

const API_KEY = process.env.NEXT_PUBLIC_APOD_API_KEY;

interface NasaApod {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
}

export default function ApodPage() {
  const [apod, setApod] = useState<NasaApod | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!API_KEY) {
      setError(
        "NASA API key is missing. Please set NEXT_PUBLIC_APOD_API_KEY in your .env file."
      );
      setLoading(false);
      return;
    }
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setApod(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch NASA data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <button
        className="mb-6 px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors"
        onClick={() => router.push("/")}
      >
        ← Back to Home
      </button>
      <header className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center mb-2">
          NASA Astronomy Picture of the Day
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Powered by NASA Open API
        </p>
      </header>
      {loading && <div className="text-lg animate-pulse">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {apod && <NasaImageCard apod={apod} />}
    </div>
  );
}
