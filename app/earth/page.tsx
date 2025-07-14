"use client";
import Link from "next/link";

export default function EarthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Earth from Space
          </h1>
          <p className="text-xl text-gray-300">
            View our beautiful planet from NASA&apos;s satellites and spacecraft
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              EPIC Camera
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              NASA&apos;s Earth Polychromatic Imaging Camera (EPIC) aboard the
              DSCOVR satellite captures stunning images of Earth from one
              million miles away.
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Daily Earth images</li>
              <li>• Real-time weather patterns</li>
              <li>• Cloud coverage data</li>
              <li>• Atmospheric studies</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Coming Soon
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Live Earth imagery</li>
              <li>• Weather satellite data</li>
              <li>• Climate change tracking</li>
              <li>• Natural disaster monitoring</li>
              <li>• Interactive Earth globe</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-green-500/30 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Earth Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Distance from Sun
              </h3>
              <p className="text-sm">93 million miles (150 million km)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Surface Area
              </h3>
              <p className="text-sm">196.9 million square miles</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Day Length
              </h3>
              <p className="text-sm">24 hours</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Year Length
              </h3>
              <p className="text-sm">365.25 days</p>
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
