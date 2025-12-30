"use client";
import React from "react";

export default function Header() {
    return (
        <header className="bg-transparent">
            {/* Top small switch */}
            <div className="px-48 h-12 bg-white shadow-md">
                <div className="flex items-center gap-4">
                    <button className="px-12 h-12 py-1 bg-indigo-600 text-white text-lg font-semibold">Individual</button>
                    <button className="px-12 py-1 h-12 text-lg font-semibold">Business</button>
                </div>
            </div>

            {/* Main pill nav */}
            <div className="container mx-auto my-5 shadow-[0_4px_27.3px_4px_rgba(0,0,0,0.15)] px-8 bg-white rounded-full py-8 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt="" />
                </div>

                {/* Center nav */}
                <nav className="flex-1 flex items-center justify-center">
                    <ul className="inline-flex items-center gap-4 bg-[#6061F7]/8 rounded-full px-4 py-4 font-semibold tracking-wide">
                        <li>
                            <a className="px-5 py-2 rounded-full text-base font-semibold">Home</a>
                        </li>
                        <li>
                            <a className="px-4 py-2 text-base font-semibold">Features</a>
                        </li>
                        <li>
                            <a className="px-4 py-2 text-base font-semibold">Regions</a>
                        </li>
                        <li>
                            <a className="px-4 py-2 text-base font-semibold">FAQs</a>
                        </li>
                    </ul>
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-4">
                    <button className="px-9 py-3 rounded-full bg-[#6061F7] text-white font-[500] text-lg">Get Started</button>
                    <button className="px-9 py-3 rounded-full border border-black text-lg text-black font-[500] flex items-center gap-3">
                        <span>
                            Contact us
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 14" fill="none">
                            <path d="M0 6.60265H14.6447M14.6447 6.60265L8.57233 0.530273M14.6447 6.60265L8.57233 12.675" stroke="black" stroke-width="1.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
