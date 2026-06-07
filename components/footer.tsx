import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 px-6 py-8 rounded-xl bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 border border-white/10 dark:border-black/20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-bold flex items-center justify-center">
            VS
          </div>
          <div>
            <p className="font-semibold text-sm">vivek</p>
            <small className="text-xs text-gray-600 dark:text-gray-400">
              Frontend & Full-stack
            </small>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a
            href="mailto:vivek22jan99@gmail.com"
            className="hover:underline text-gray-700 dark:text-gray-200"
          >
            Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-gray-700 dark:text-gray-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-gray-700 dark:text-gray-200"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-gray-700 dark:text-gray-200"
          >
            Resume
          </a>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="inline-block px-3 py-2 rounded-md bg-white/80 dark:bg-white/5 hover:scale-105 transition-transform"
          >
            Back to top
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        <span className="block">© 2024 vivek. All rights reserved.</span>
        <span className="block mt-1">
          Built with Next.js · Tailwind · Framer Motion
        </span>
      </div>
    </footer>
  );
}
