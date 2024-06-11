import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";


function SignUp() {
  const navigate =useNavigate("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit=async (data)=>{
      const userInfo={...data}
      // console.log(userInfo)
      await axios.post("http://localhost:8000/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          navigate("/")
          toast.success("signup successfully !")
        }
        localStorage.setItem("users",JSON.stringify(res.data.user))
      }).catch(error=>{
        if(error.response){
          console.log(error)
          toast.error(`${error.response.data.message} !`);
        }
      })
        
  }
  return (
    <>
      <div className=" flex justify-center items-center h-screen ">
        <div className="modal-box dark:text-white dark:bg-slate-700">
          <form
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl"
            >
              ✕
            </Link>
            <h3 className="font-bold text-2xl text-center">SignUp</h3>
            {/* Name  */}
            <div className="mt-4">
              <label htmlFor="name">Name</label> <br />
              <input
                type="text"
                id="name"
                placeholder="Enter your name.."
                className="px-3 py-2 outline-none rounded-lg 
            border-[2px] mt-2 w-full dark:text-black"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-sm text-red-600">
                  Please enter Your FullName..
                </p>
              )}
            </div>
            {/* Email  */}
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
              {errors.password && (
                <p className="text-sm text-red-600">
                  Please enter Your Password..
                </p>
              )}
            </div>
            <div className="flex justify-between mt-4 items-center">
              <button
                type="submit"
                className="text-sm border px-4 py-2 text-white rounded-xl bg-pink-500 hover:bg-pink-700 duration-300 ease-in-out"
              >
                Signup
              </button>
              <p className="text-sm">
                You Have Account ?{" "}
                <button
                  className="text-indigo-600 hover:text-indigo-800 underline"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  // onClick={()=> navigate("/")}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
