"use client";
import { createElement } from "react";
import { content } from "@/Content";
import ContactForm from "@/components/Contact/ContactForm";

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
          <ContactForm />
          <div className="flex-1 flex flex-col gap-5  py-14">
            {Contact.social_media.map((content) => (
              <div key={content.id} className="flex items-center gap-2">
                <h4 className="text-lg mr-2 text-white">
                  {createElement(content.icon)}
                </h4>
                <a href={content.link} rel="noopener">
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
