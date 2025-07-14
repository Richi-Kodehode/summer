"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NasaApod {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
}

const API_KEY = process.env.NEXT_PUBLIC_APOD_API_KEY;

export default function GalleryPage() {
  const [apods, setApods] = useState<NasaApod[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!API_KEY) {
      setError("NASA API key is missing.");
      setLoading(false);
      return;
    }

    // Fetch last 12 APOD images
    const fetchRecentApods = async () => {
      try {
        const promises = [];
        const today = new Date();

        for (let i = 0; i < 12; i++) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const dateString = date.toISOString().split("T")[0];

          promises.push(
            fetch(
              `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateString}`
            )
              .then((res) => res.json())
              .then((data) => ({ ...data, date: dateString }))
          );
        }

        const results = await Promise.all(promises);
        const validApods = results.filter(
          (apod) => !apod.error && apod.media_type === "image"
        );
        setApods(validApods);
        setLoading(false);
      } catch {
        setError("Failed to fetch gallery images.");
        setLoading(false);
      }
    };

    fetchRecentApods();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          NASA Image Gallery
        </h1>
        <p className="text-xl text-gray-300">
          Recent Astronomy Pictures of the Day
        </p>
      </header>

      {loading && (
        <div className="text-center">
          <div className="text-lg animate-pulse text-white">
            Loading gallery...
          </div>
        </div>
      )}

      {error && (
        <div className="text-center">
          <div className="text-red-500 mb-4">{error}</div>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      )}

      {!loading && !error && (
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apods.map((apod) => (
              <div
                key={apod.date}
                className="bg-black/20 backdrop-blur-md rounded-lg overflow-hidden border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={apod.url}
                    alt={apod.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {apod.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                    {apod.explanation}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-400">{apod.date}</span>
                    <Link
                      href={`/apod/${apod.date}`}
                      className="px-3 py-1 rounded bg-green-600 text-white text-sm hover:bg-green-700 transition-colors"
                    >
                      View Full
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
