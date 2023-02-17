import Link from "next/link";
import Image from "next/image";
import { content } from "@/Content";

const Hero = () => {
  const { hero } = content;
  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center ">
        <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt- ">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <Link href="/contact" className="btn">
              {hero.btnText}
            </Link>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content) => (
              <div
                key={content.id}
                className={`flex items-center w-80 gap-5
            ${content.id === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="w-64 md:w-96 lg:w-[37rem]">
          <Image
            priority
            src={hero.image.src}
            data-aos="slide-up"
            alt="Rasika Jayasinghe"
            className="h-full object-cover"
            width={448}
            height={592}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
