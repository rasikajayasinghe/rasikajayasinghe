import sanityClient from "@/lib/sanity-client";
import type { BlogPost } from "@/lib/types";
import { groq } from "next-sanity";

//get blog post list
export const getBlogPosts = async () => {
  return await sanityClient.fetch<BlogPost[]>(
    groq`*[_type == "blog"]|order(date desc){
      _id,
      _createdAt,
        title,
        author -> {
        name,
        image
        },
        description,
        mainImage,
        slug,
    }`
  );
};

//get one post details
export const getBlogPost = async (slug: string) => {
  const result = await sanityClient.fetch<BlogPost>(
    groq`*[_type == "blog" && slug.current == $slug][0]{
         _id,
        _createdAt,
        title,
        author-> {
        name,
        image,
        },
        'comments': *[
            _type == "comment" &&
            blog._ref == ^._id &&
            approved == true
        ],
        description,
        mainImage,
        slug,
        body,
        }`,
    {
      slug,
    }
  );

  return result;
};
