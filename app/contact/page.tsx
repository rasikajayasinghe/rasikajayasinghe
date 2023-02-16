"use client";
import { createElement } from "react";
import { content } from "@/Content";

export default function ContactPage() {
  const { Contact } = content;
  return (
    <section
      className="min-h-screen flex items-center bg-dark_primary text-white"
      id="contact"
    >
      <div className="container lg:container px-5 py-28">
        <h2 className="title text-white">{Contact.title}</h2>
        <h4 className="subtitle text-white">{Contact.subtitle}</h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form className="flex-1 flex flex-col gap-5">
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} rel="noopener">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
