"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
