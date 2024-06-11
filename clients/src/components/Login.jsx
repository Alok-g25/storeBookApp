import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:text-white dark:bg-slate-700">
          <form
            method="dialog"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl text-center">Login</h3>
              {/* {Email} */}
            <div className="mt-4">
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                id="email"
                placeholder="Enter your email.."
                className="px-3 py-2 outline-none rounded-lg 
            border-[2px] mt-2 w-full"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <p className="text-sm text-red-600">
                  Please enter Your Email..
                </p>
              )}
            </div>
            {/* password  */}
            <div className="mt-4">
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                id="password"
                placeholder="Enter your password.."
                className="px-3 py-2 outline-none rounded-lg 
            border-[2px] mt-2 w-full"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <p className="text-sm text-red-600">
                  Please enter Your Eassword..
                </p>
              )}
            </div>
            <div className="flex justify-between mt-4 items-center">
              <button
                type="submit"
                className="border px-4 py-2 text-sm text-white rounded-xl bg-pink-500 hover:bg-pink-700 duration-300 ease-in-out"
              >
                Login
              </button>
              <p className="text-sm">
                New Registered ? {" "}
                <Link
                  to="/signup"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
