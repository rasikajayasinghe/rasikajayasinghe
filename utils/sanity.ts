import sanityClient from "@/lib/sanity-client";
import type { BlogPost } from "@/lib/types";
import { groq } from "next-sanity";

//get blog post list
export const getBlogPosts = async () => {
  const query = groq`*[_type == "blog"]|order(date desc){
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
    }`;
  return await sanityClient.fetch<BlogPost[]>(query);
};

//get one post details
export const getBlogPost = async (slug: string) => {
  const query = groq`*[_type == "blog" && slug.current == $slug][0]{
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
        }`;
  const result = await sanityClient.fetch<BlogPost>(query, { slug });
  return result;
};
