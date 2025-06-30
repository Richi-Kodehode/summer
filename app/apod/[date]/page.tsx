"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import NasaImageCard from "../../components/NasaImageCard";

const API_KEY = process.env.NEXT_PUBLIC_APOD_API_KEY;

interface NasaApod {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
}

function getRandomDate() {
  const start = new Date(1995, 5, 16);
  const end = new Date();
  end.setDate(end.getDate() - 1);
  const random = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  const yyyy = random.getFullYear();
  const mm = String(random.getMonth() + 1).padStart(2, "0");
  const dd = String(random.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

async function fetchValidApodDate(retries = 5): Promise<string | null> {
  if (!API_KEY) return null;
  for (let i = 0; i < retries; i++) {
    const date = getRandomDate();
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
    );
    const data = await res.json();
    if (!(data.code === 400 || data.code === 404 || data.error)) {
      return date;
    }
  }
  return null;
}

export default function ApodDatePage() {
  const params = useParams();
  const router = useRouter();
  const date = Array.isArray(params.date) ? params.date[0] : params.date;
  const [apod, setApod] = useState<NasaApod | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!date) return;
    if (!API_KEY) {
      setError(
        "NASA API key is missing. Please set NEXT_PUBLIC_APOD_API_KEY in your .env file."
      );
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 400 || data.code === 404 || data.error) {
          setError("No picture found for this date.");
        } else {
          setApod(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch NASA data.");
        setLoading(false);
      });
  }, [date]);

  const handleNextRandom = async () => {
    setLoading(true);
    setError("");
    if (!API_KEY) {
      setError(
        "NASA API key is missing. Please set NEXT_PUBLIC_APOD_API_KEY in your .env file."
      );
      setLoading(false);
      return;
    }
    const validDate = await fetchValidApodDate();
    if (validDate) {
      router.push(`/apod/${validDate}`);
    } else {
      setError("Could not find a valid random APOD after several tries.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="flex flex-row gap-4 mb-6">
        <button
          className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors"
          onClick={() => router.push("/")}
        >
          ← Back to Home
        </button>
        <button
          className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors"
          onClick={handleNextRandom}
        >
          Next Random Picture
        </button>
      </div>
      <header className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center mb-2">
          NASA Astronomy Picture of the Day
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300">{date}</p>
      </header>
      {loading && <div className="text-lg animate-pulse">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {apod && <NasaImageCard apod={apod} />}
    </div>
  );
}
