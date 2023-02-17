import Image from "next/image";
import { getBlogPosts, getBlogPost } from "@/utils/sanity";
import getFormattedDate from "date-formatter-ts";
import { urlFor } from "@/lib/sanity-client";
import PortableText from "react-portable-text";
import BlogComment from "@/components/blog/BlogComment";
import CommentsView from "@/components/blog/CommentCard";

//reset cache
export const revalidate = 60;

//generate static params
export const generateStaticParams = async () => {
  const blogPosts = await getBlogPosts();

  return blogPosts.map((post) => ({
    slug: post.slug.current,
  }));
};

interface BlogPostViewProps {
  params: {
    slug: string;
  };
}

const BlogPostView = async ({ params }: BlogPostViewProps) => {
  const slug = params?.slug.toString();
  const post = await getBlogPost(slug);

  return (
    <section className="min-h-screen flex items-center">
      <div className="container lg:container px-5 py-28">
        <Image
          priority
          className="w-full h-80 object-cover mb-12"
          src={urlFor(post.mainImage).url()!}
          alt={post.title}
          height={320}
          width={1152}
        />
        <h2 className="title">{post.title}</h2>
        <h4 className="subtitle text-sm mt-4">
          {getFormattedDate(new Date(post._createdAt), "MMM DD, YYYY")}
        </h4>
        <br />
        <div className="flex items-center space-x-2">
          <Image
            priority
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt={post.author.name}
            width={40}
            height={40}
          />
          <p className="font-extralight text-sm">
            Blog post by{" "}
            <span className="text-blue-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toDateString()}
          </p>
        </div>
        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={{
              h1: (props: any) => <h1 className="text-2-xl font-bold my-5" />,
              h2: (props: any) => <h2 className="text-xl font-bold my-5" />,
              h3: (props: any) => <h2 className="text-sm font-bold my-5" />,
              p: (props: any) => <p className=" my-3" />,
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
        {/* comment view */}
        {post.comments.length > 0 && (
          <div className="flex flex-col my-10 mx-auto space-y-2">
            <h3 className="text-2xl font-bold">Comments</h3>
            <hr />
            {post.comments.map(({ _id, name, comment }) => (
              <CommentsView key={_id} name={name} comment={comment} />
            ))}
          </div>
        )}

        {/* comment form */}
        <BlogComment postId={post._id} />
      </div>
    </section>
  );
};

export default BlogPostView;
