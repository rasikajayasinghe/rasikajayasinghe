"use client";
import Image from "next/image";
import { content } from "@/Content";
import { createElement } from "react";

export default function AboutPage() {
  const { skills } = content;

  return (
    <section className="min-h-screen flex items-center bg-bg_light_primary">
      <div className="container lg:container px-5 py-28">
        <h2 className="title">{skills.title}</h2>
        <h4 className="subtitle">{skills.subtitle}</h4>
        <br />
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {skills.skills_content.map((skill) => (
            <div
              key={skill.name}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 rounded-md border-2 border-slate-200"
            >
              <div>
                <Image
                  priority
                  src={skill.logo.src}
                  alt={skill.name}
                  className="w-10 group-hover:scale-125 duration-200"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div className="text-xl absolute top-3 right-3">
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
