import SEO from "@/components/SEO";
import { getBlogPost } from "@/utils/sanity";

interface BlogDetailsHeadProps {
  params: {
    slug: string;
  };
}

const BlogDetailsHead = async ({ params }: BlogDetailsHeadProps) => {
  const slug = params?.slug.toString();
  const post = await getBlogPost(slug);

  if (!post) {
    return null;
  }

  return <SEO title={post.title} description={post.description} />;
};

export default BlogDetailsHead;
