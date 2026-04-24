"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f5e6c8] to-[#e6d3a3] p-4">

      {/* CARD */}
      <div className="max-w-md w-full bg-[#fffaf0] rounded-[30px] shadow-2xl border border-yellow-200 p-6 text-center relative overflow-hidden">

        {/* HEADER */}
        <p className="text-sm text-gray-700 tracking-wide">
          || Shree Ganeshay Namah ||
        </p>

        {/* IMAGE (Baby Krishna style) */}
        <div className="flex justify-center mt-4">
          <Image
            src="/baby.jpg"   // your image
            width={220}
            height={220}
            alt="baby"
            className="rounded-full border-4 border-yellow-500 shadow-lg object-cover"
          />
        </div>

        {/* TITLE */}
        <p className="mt-4 text-gray-700 text-sm">
          With the blessings of our elders we cordially invite you
        </p>

        <h1 className="text-4xl font-serif text-yellow-800 mt-2">
          Naming Ceremony
        </h1>

        <p className="text-gray-600 text-sm">
          of our beloved son
        </p>

        {/* NAMES */}
        <h2 className="text-2xl font-bold text-green-900 mt-2">
          Rahul & Agrawee
        </h2>

        {/* DATE BOX */}
        <div className="mt-6 flex justify-center items-center gap-4">

          <div className="text-center">
            <p className="text-sm text-gray-600">SUNDAY</p>
          </div>

          <div className="bg-green-900 text-white px-6 py-4 rounded-full shadow-lg border-4 border-yellow-400">
            <p className="text-xs">MAY</p>
            <p className="text-2xl font-bold">03</p>
            <p className="text-xs">2026</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">6:00 PM</p>
          </div>

        </div>

        {/* PRESENCE TEXT */}
        <p className="mt-6 text-gray-700 tracking-wide">
          ✦ AWAITING YOUR PRESENCE ✦
        </p>

        {/* HOST */}
        <div className="bg-green-900 text-white mt-3 px-4 py-2 rounded-full shadow-md">
          Mr. Jagdish Venkatpati Kondi
        </div>

        <p className="text-gray-700 text-sm mt-1">
          Kondi Family
        </p>

        {/* VENUE */}
        <div className="mt-6 border-t pt-4">

          <p className="font-bold text-gray-800">VENUE</p>

          <p className="text-gray-700 text-sm mt-2">
            Satyalaxmi Gold Kamuni Multipurpose Function Hall,<br />
            Near Old Walchand College,<br />
            Solapur - 413006
          </p>

        </div>

        {/* FOOTER ICON TEXT */}
        <div className="mt-6 flex justify-around text-xs text-gray-600">
          <p>🪔 Blessings only</p>
          <p>🌸 Celebrate with us</p>
          <p>🎁 Your love is our gift</p>
        </div>

      </div>
    </div>
  );
}