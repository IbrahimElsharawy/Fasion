import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by passing the name of the input

  return (
    <div>
      <h2 className="text-3xl font-thin  mb-6 ">Send us your message</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-second-border-color sm:text-sm"
            placeholder="First Name"
          />
          {errors?.firstName?.type === "required" && (
            <p className="text-custom-text-color text-xs mt-1">
              This field is required
            </p>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <p className="text-custom-text-color text-xs mt-1">
              First name cannot exceed 20 characters
            </p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p className="text-custom-text-color text-xs mt-1">
              Alphabetical characters only
            </p>
          )}
        </div>

        <div>
          <input
            {...register("phoneNumber", {
              required: true,
              pattern: /^[0-9]{10,15}$/,
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-second-border-color sm:text-sm"
            placeholder="Phone Number"
          />
          {errors?.phoneNumber?.type === "required" && (
            <p className="text-custom-text-color text-xs mt-1">
              This field is required
            </p>
          )}
          {errors?.phoneNumber?.type === "pattern" && (
            <p className="text-custom-text-color text-xs mt-1">
              Enter a valid phone number (10-15 digits)
            </p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-second-border-color sm:text-sm"
            placeholder="Email Address"
          />
          {errors?.email?.type === "required" && (
            <p className="text-custom-text-color text-xs mt-1">
              This field is required
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="text-custom-text-color text-xs mt-1">
              Enter a valid email address
            </p>
          )}
        </div>

        <div>
          <textarea
            {...register("message", {
              required: true,
              maxLength: 500,
            })}
            style={{ height: "120px", width: "100%" }}
            className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-second-border-color sm:text-sm"
            placeholder="Message"
          />
          {errors?.message?.type === "required" && (
            <p className="text-custom-text-color text-xs mt-1">
              This field is required
            </p>
          )}
          {errors?.message?.type === "maxLength" && (
            <p className="text-custom-text-color text-xs mt-1">
              Message cannot exceed 500 characters
            </p>
          )}
        </div>

        <div>
          <input
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent  text-sm font-medium rounded-md text-white bg-black hover:bg-custom-color  "
          />
        </div>
      </form>
    </div>
  );
};

export default MyForm;
