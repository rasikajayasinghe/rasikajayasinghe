"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ThankYouImg from "@/assets/images/blog/thank-you.png";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch("/api/createContact", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
        reset();
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex flex-col gap-5"
    >
      {errors && (
        <div className="flex flex-col p-5">
          {errors.name && (
            <span className="text-red-500">- The Name Field is required</span>
          )}
          {errors.email && (
            <span className="text-red-500">- The Email Field is required</span>
          )}
          {errors.message && (
            <span className="text-red-500">
              - The Message Field is required
            </span>
          )}
        </div>
      )}
      {submitted && (
        <div className="flex py-4 px-2 items-center  my-10 bg-primaryLinear text-white  mx-auto rounded-sm">
          <Image
            src={ThankYouImg}
            alt="Thank you for comments"
            width={96}
            height={96}
          />
          <div>
            <h5 className=" text-2xl font-bold mb-2">
              Thank you for filling out your information!
            </h5>
          </div>
        </div>
      )}

      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Full Name"
        className="border border-slate-600 p-3 rounded bg-transparent"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
        className="border border-slate-600 p-3 rounded bg-transparent"
      />
      <textarea
        {...register("message", { required: true })}
        placeholder="Message"
        className="border border-slate-600 p-3 rounded h-44"
      ></textarea>

      <button
        type="submit"
        className="btn self-start
            bg-white text-dark_primary"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
