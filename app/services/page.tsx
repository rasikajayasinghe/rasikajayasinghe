import Link from "next/link";
import Image from "next/image";
import { content } from "@/Content";
import { BiChevronRight } from "react-icons/bi";

export default function ServicesPage() {
  const { services } = content;
  return (
    <section id="services" className="min-h-screen flex items-center">
      <div className="container lg:container px-5 py-28">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content) => (
            <div
              key={content.title}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <Image
                priority
                width={40}
                height={40}
                src={content.logo.src}
                alt={services.title}
                className="mx-auto"
              />
              <h6 className="my-3">{content.title}</h6>
              <Link
                href="#"
                className="flex justify-center items-center text-sm text-dark_primary"
              >
                Click more <BiChevronRight size={24} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
