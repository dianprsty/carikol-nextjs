"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    // contoh: validasi sederhana email
    if (!email) {
      alert("Please enter your email");
      return;
    }
    // Di sini kamu bisa panggil API atau simpan email
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col gap-6 justify-between items-center p-10 bg-teal-600 lg:flex-row sm:p-10 sm:gap-8">
      <div className="flex flex-col gap-6 justify-between items-center mx-auto w-full max-w-6xl lg:flex-row">
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="mb-2 text-3xl font-bold text-white">Newsletter</h2>
          <p className="text-white">
            Selalu jadi yang pertama tahu tentang diskon, promo menarik, dan
            event spesial dari kami.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex overflow-hidden gap-4 items-center max-w-xl bg-teal-800 rounded-lg w-fit"
        >
          <div className="flex items-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-white w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder-white text-white bg-transparent outline-none w-48"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 m-1 font-semibold text-teal-600 bg-teal-50 rounded-md hover:shadow-teal-300"
          >
            Submit
          </button>
        </form>
      </div>

      {submitted && (
        <p className="mt-4 text-white font-medium">
          Terima kasih sudah berlangganan newsletter!
        </p>
      )}
    </div>
  );
}
