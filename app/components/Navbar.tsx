"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/apod" && pathname === "/apod") return true;
    if (path.startsWith("/apod/") && pathname.startsWith("/apod/")) return true;
    return false;
  };

  const handleRandomApod = () => {
    router.push(`/apod/${getRandomDate()}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/40 backdrop-blur-md rounded-full border border-green-500/30 px-6 py-3">
          <div className="flex items-center justify-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors duration-200 px-3 py-1 rounded-full ${
                isActive("/")
                  ? "text-green-400 bg-green-400/20"
                  : "text-white hover:text-green-400 hover:bg-green-400/10"
              }`}
            >
              Home
            </Link>

            <Link
              href="/apod"
              className={`text-sm font-semibold transition-colors duration-200 px-3 py-1 rounded-full ${
                isActive("/apod")
                  ? "text-green-400 bg-green-400/20"
                  : "text-white hover:text-green-400 hover:bg-green-400/10"
              }`}
            >
              Today&apos;s APOD
            </Link>

            <button
              onClick={handleRandomApod}
              className="text-sm font-semibold text-white hover:text-green-400 transition-colors duration-200 px-3 py-1 rounded-full hover:bg-green-400/10"
            >
              Random APOD
            </button>

            <div className="relative group">
              <button className="text-sm font-semibold text-white hover:text-green-400 transition-colors duration-200 px-3 py-1 rounded-full hover:bg-green-400/10">
                Explore
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-green-500/30">
                <div className="py-2">
                  <Link
                    href="/gallery"
                    className="block px-4 py-2 text-white hover:bg-green-600/20 transition-colors"
                  >
                    Image Gallery
                  </Link>
                  <Link
                    href="/mars"
                    className="block px-4 py-2 text-white hover:bg-green-600/20 transition-colors"
                  >
                    Mars Rover
                  </Link>
                  <Link
                    href="/earth"
                    className="block px-4 py-2 text-white hover:bg-green-600/20 transition-colors"
                  >
                    Earth from Space
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors duration-200 px-3 py-1 rounded-full ${
                isActive("/about")
                  ? "text-green-400 bg-green-400/20"
                  : "text-white hover:text-green-400 hover:bg-green-400/10"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-black/40 backdrop-blur-md rounded-full border border-green-500/30 p-3 text-white hover:text-green-400 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors duration-200 px-6 py-3 rounded-lg ${
                  isActive("/")
                    ? "text-green-400 bg-green-400/20"
                    : "text-white hover:text-green-400 hover:bg-green-400/10"
                }`}
              >
                Home
              </Link>

              <Link
                href="/apod"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors duration-200 px-6 py-3 rounded-lg ${
                  isActive("/apod")
                    ? "text-green-400 bg-green-400/20"
                    : "text-white hover:text-green-400 hover:bg-green-400/10"
                }`}
              >
                Today&apos;s APOD
              </Link>

              <button
                onClick={handleRandomApod}
                className="text-2xl font-semibold text-white hover:text-green-400 transition-colors duration-200 px-6 py-3 rounded-lg hover:bg-green-400/10"
              >
                Random APOD
              </button>

              <Link
                href="/gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-white hover:text-green-400 transition-colors duration-200 px-6 py-3 rounded-lg hover:bg-green-400/10"
              >
                Image Gallery
              </Link>

              <Link
                href="/mars"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-white hover:text-green-400 transition-colors duration-200 px-6 py-3 rounded-lg hover:bg-green-400/10"
              >
                Mars Rover
              </Link>

              <Link
                href="/earth"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-white hover:text-green-400 transition-colors duration-200 px-6 py-3 rounded-lg hover:bg-green-400/10"
              >
                Earth from Space
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors duration-200 px-6 py-3 rounded-lg ${
                  isActive("/about")
                    ? "text-green-400 bg-green-400/20"
                    : "text-white hover:text-green-400 hover:bg-green-400/10"
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
