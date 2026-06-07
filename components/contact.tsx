"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">Contact me</h2>
      <p className="text-gray-700 -mt-6 dark:text-white/80 max-w-xl mx-auto text-center">
        Have a project, question, or just want to say hi? Send me a message — I
        usually reply within a few days.
      </p>

      <div className="mt-8 w-full max-w-3xl mx-auto grid gap-6">
        <div className="p-6 rounded-xl bg-white/70 dark:bg-gray-900/60 border border-white/20 dark:border-black/20 shadow text-center">
          <h4 className="font-semibold text-lg mb-2">Let&apos;s build something</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Tell me about your project, timeline, and goals. I&apos;ll follow up with
            next steps.
          </p>

         
        </div>

        <form
          className="p-6 rounded-xl bg-white/70 dark:bg-gray-900/60 border border-white/20 dark:border-black/20 shadow-md"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <div className="grid grid-cols-1 gap-3">
            <input
              className="h-12 px-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full"
              name="senderName"
              type="text"
              placeholder="Your name (optional)"
              maxLength={100}
            />
            <input
              className="h-12 px-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full"
              name="subject"
              type="text"
              placeholder="Subject (optional)"
              maxLength={150}
            />
          </div>

          <input
            className="mt-3 h-12 px-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />

          <textarea
            className="mt-3 rounded-md border border-gray-200 dark:border-gray-800 p-3 h-40 bg-white/60 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full resize-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />

          <div className="mt-4 flex flex-col items-center gap-3">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">I&apos;ll reply within a few days</div>
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
