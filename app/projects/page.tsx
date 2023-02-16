import { content } from "@/Content";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

export default function ProjectPage() {
  const { Projects } = content;
  return (
    <section className="min-h-screen flex items-center bg-bg_light_primary">
      <div className="container lg:container px-5 py-28">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
            {Projects.project_content.map((project) => (
              <div
                key={project.id}
                className="bg-gray-400 antialiased text-gray-900"
              >
                <div>
                  <Image
                    priority
                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg border border-x-stone-200 overflow-hidden"
                    src={project.image.src}
                    alt={project.title}
                    height={400}
                    width={400}
                  />

                  <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h4 className="mt-1 text-sm font-semibold uppercase leading-tight truncate text-dark_primary">
                        {project.title}
                      </h4>

                      <div className="mt-1 mb-2 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat sunt facilis consequuntur quam magni esse
                        corporis laboriosam nulla consequatur, in vel ab
                        deserunt animi temporibus expedita quidem at excepturi
                        rerum!
                      </div>
                      <div className="flex items-baseline mt-4">
                        <div className=" text-slate-500 uppercase text-xs font-semibold tracking-wider">
                          Laravel &bull; php &bull; CSS3 &bull; MySql
                        </div>
                      </div>
                      <Link
                        href={project.url}
                        target="_blank"
                        className="flex justify-start items-center text-sm mt-4 font-medium text-dark_primary"
                      >
                        View Project <BiChevronRight size={24} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
