"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t rounded-t-6xl bg-white shadow-[0_4px_27.3px_4px_rgba(0,0,0,0.15)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-gray-500">
              <li>About Akeem</li>
              <li>Careers</li>
              <li>Media Kit</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Security FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Access</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Start using Akeem</li>
              <li>Convert currency</li>
              <li>Regional features</li>
              <li>Security FAQs</li>
              <li>Wallet modes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Office Location</h4>
            <p className="text-gray-600 mb-6">Akeem Wallet, 313 Sydenham Road, London SE26 5EW, United Kingdom</p>

            <h5 className="text-base font-medium mb-3">News letter</h5>
            <div className="flex items-center gap-3">
              <input
                aria-label="Enter your email address"
                placeholder="Enter your email address"
                className="flex-1 border-b border-gray-200 py-2 px-2 focus:outline-none"
              />
              <button className="w-10 h-10 rounded bg-sky-900 text-white flex items-center justify-center">✉</button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a className="text-sky-800">🐦</a>
            <a className="text-sky-800">in</a>
            <a className="text-sky-800">f</a>
          </div>

          <div className="text-center text-gray-500">© Akeem is the subsidiary of PayLaterr Inc</div>
        </div>
      </div>
    </footer>
  );
}
