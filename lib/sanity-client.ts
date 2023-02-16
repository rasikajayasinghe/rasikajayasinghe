import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

//sanity client configuration
const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "v1",
  useCdn: true,
  token,
});

export default sanityClient;

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
