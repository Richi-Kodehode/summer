"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About NASA Explorer
          </h1>
          <p className="text-xl text-gray-300">
            Discover the universe through NASA&apos;s incredible imagery
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              NASA Explorer brings the wonders of space directly to your screen.
              We showcase stunning astronomical images, Mars rover photos, and
              real-time Earth imagery from NASA&apos;s extensive collection.
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Features</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Astronomy Picture of the Day (APOD)</li>
              <li>• Historical image browsing</li>
              <li>• Random space discoveries</li>
              <li>• Interactive date picker</li>
              <li>• Responsive design</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            NASA APIs Used
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Astronomy Picture of the Day
              </h3>
              <p className="text-gray-300 text-sm">
                Daily space images with detailed explanations from NASA&apos;s
                APOD API. Images date back to June 16, 1995.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-300 text-sm">
                Mars Rover photos, Earth imagery, and more NASA data sources.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 text-lg"
          >
            Start Exploring
          </Link>
        </div>
      </div>
    </div>
  );
}
