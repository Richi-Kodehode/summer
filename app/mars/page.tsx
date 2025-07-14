"use client";
import Link from "next/link";

export default function MarsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Mars Rover Explorer
          </h1>
          <p className="text-xl text-gray-300">
            Discover the Red Planet through NASA&apos;s robotic explorers
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Active Rovers
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Perseverance
                </h3>
                <p className="text-gray-300 text-sm">
                  Launched in 2020, searching for signs of ancient life and
                  collecting samples.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Curiosity</h3>
                <p className="text-gray-300 text-sm">
                  Exploring since 2012, studying Mars&apos; climate and geology.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Coming Soon
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Live Mars weather data</li>
              <li>• Latest rover photos</li>
              <li>• Mission status updates</li>
              <li>• Interactive Mars map</li>
              <li>• Sample collection tracking</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Mars Facts</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Distance from Earth
              </h3>
              <p className="text-sm">33.9 million miles (average)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Surface Temperature
              </h3>
              <p className="text-sm">-140°F to 70°F (-95°C to 20°C)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Day Length
              </h3>
              <p className="text-sm">24 hours, 37 minutes</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Year Length
              </h3>
              <p className="text-sm">687 Earth days</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 text-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
