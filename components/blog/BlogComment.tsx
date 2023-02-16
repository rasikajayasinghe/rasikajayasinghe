"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import ThankYouImg from "@/assets/images/blog/thank-you.png";

interface BlogComponentProps {
  postId: string;
}
interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const BlogComment = ({ postId }: BlogComponentProps) => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <div className="mt-10">
      {submitted ? (
        <div className="flex p-8 gap-5 my-10 bg-primaryLinear text-white  mx-auto rounded-sm">
          <Image
            src={ThankYouImg}
            alt="Thank you for comments"
            width={96}
            height={96}
          />
          <div>
            <h5 className="text-3xl font-bold mb-2">
              Thank you for submitting your comment!
            </h5>
            <p>Once it has been approved, it will appear below!</p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-10 mx-auto mb-10 bg-primaryLinear"
        >
          <h3 className="text-sm">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />

          <input {...register("_id")} type="hidden" name="_id" value={postId} />
          <label className="block mb-5">
            <span className="text-gray-700">Name *</span>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              type="text"
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-300 outline-none focus:ring"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Email *</span>
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-300 outline-none focus:ring"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Comment *</span>
            <textarea
              {...register("comment", { required: true })}
              placeholder="Comment"
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-blue-300 outline-none focus:ring"
              rows={8}
            />
          </label>

          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">- The Name Field is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">
                - The Email Field is required
              </span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                - The Comment Field is required
              </span>
            )}
          </div>

          <input
            type="submit"
            className=" shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </form>
      )}
    </div>
  );
};

export default BlogComment;
