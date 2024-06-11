import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { ...data };
    // console.log(userInfo)
    await axios
      .post("http://localhost:8000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("login successfully ")
          document.getElementById("my_modal_3").close();
          toast.success("Login successfully!");
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          // alert("Error : "+error.response.data.message)
          toast.error(`${error.response.data.message} !`);
          setTimeout(()=>{
          },1000)
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:text-white dark:bg-slate-700">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
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
            border-[2px] mt-2 w-full dark:text-black"
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
            border-[2px] mt-2 w-full dark:text-black"
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
                New Registered ?{" "}
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
