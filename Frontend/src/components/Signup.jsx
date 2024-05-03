import React from "react";
import Login from "./Login";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[400px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-slate-900"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg dark:text-slate-900">SignUp!</h3>
              {/* name */}
              <div className="mt-4 space-y-2 dark:text-slate-900">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2 dark:text-slate-900">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-5 space-y-2 dark:text-slate-900">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                 <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p>Have account? <button to="/" className="underline text-blue-500 cursor-pointer" onClick={()=> document.getElementById("my_modal_3").showModal()}>LogIn</button>{" "}<Login/></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
