"use client";
import Image from "next/image";

interface NasaApod {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
}

export default function NasaImageCard({ apod }: { apod: NasaApod }) {
  return (
    <div className="max-w-xl w-full bg-white dark:bg-black rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-2 animate-fade-in">
        {apod.title}
      </h2>
      {apod.media_type === "image" ? (
        <Image
          src={apod.url}
          alt={apod.title}
          className="rounded-md w-full object-cover max-h-96 mb-4 animate-fade-in"
          width={800}
          height={600}
          unoptimized
        />
      ) : (
        <iframe
          src={apod.url}
          title={apod.title}
          className="w-full h-64 rounded mb-4 animate-fade-in"
          allowFullScreen
        />
      )}
      <p className="text-sm text-gray-700 dark:text-gray-300 animate-fade-in delay-200">
        {apod.explanation}
      </p>
      <span className="text-xs text-gray-500 mt-2 animate-fade-in delay-300">
        {apod.date}
      </span>
    </div>
  );
}
