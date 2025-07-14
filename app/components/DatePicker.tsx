"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  // Calculate min and max dates
  const minDate = "1995-06-16"; // First APOD
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() - 1); // Yesterday
  const maxDateString = maxDate.toISOString().split("T")[0];

  const handleDateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate) {
      router.push(`/apod/${selectedDate}`);
    }
  };

  return (
    <form
      onSubmit={handleDateSubmit}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8"
    >
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <label htmlFor="apod-date" className="text-white font-semibold text-lg">
          Choose a Date:
        </label>
        <input
          type="date"
          id="apod-date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={minDate}
          max={maxDateString}
          className="px-4 py-2 rounded-lg border-2 border-green-600 bg-white text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold"
          required
        />
      </div>
      <button
        type="submit"
        disabled={!selectedDate}
        className="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
      >
        View APOD
      </button>
    </form>
  );
}
