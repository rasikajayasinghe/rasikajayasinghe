import Link from "next/link";
import Image from "next/image";
import getFormattedDate from "date-formatter-ts";

import { getBlogPosts } from "@/utils/sanity";
import { urlFor } from "@/lib/sanity-client";

export const revalidate = 60;

const BlogPage = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <section id="blog" className="min-h-screen flex items-center">
      <div className="container lg:container px-5 py-28">
        <h2 className="title">{"Welcome to my Blog"}</h2>
        <h4 className="subtitle">Learn more..</h4>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6  ">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className=""
            >
              <div className="group cursor-pointer border rounded-lg overflow-hidden">
                <Image
                  priority
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt={post.title}
                  width={281}
                  height={240}
                />

                <div className="flex justify-between items-start p-5 bg-white">
                  <div>
                    <span className=" text-sm">
                      {getFormattedDate(
                        new Date(post._createdAt),
                        "MMM DD, YYYY"
                      )}
                    </span>
                    <h2 className="font-semibold  text-lg mb-1">
                      {post.title}
                    </h2>
                    <p className=" text-slate-700 text-xs">
                      {post.description} by {post.author.name}
                    </p>
                  </div>
                  <Image
                    className="h-12 w-12 rounded-full"
                    width={48}
                    height={48}
                    src={urlFor(post.author.image).url()!}
                    alt={post.author.name}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
