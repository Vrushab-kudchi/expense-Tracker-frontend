import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../feature/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = (data) => {
    dispatch(userLogin(data));
  };
  return (
    <>
      <div className="container">
        <div className="md:flex justify-center items-center h-screen ">
          <div className="md:flex">
            <div>
              <img
                src="./login.svg"
                alt="login image"
                className="md:h-[600px] "
              />
            </div>
            <div className="w-[95%] mb-24 mx-auto bg-[var(--color-primary)] p-5 rounded-2xl md:rounded-l-none md:rounded-r-3xl  md:px-12">
              <h1 className="text-2xl md:text-6xl pt-9">
                Hello, Welcome Back!
              </h1>
              <p className="mb-8 text-lg  md:text-xl md:w-[80%] py-4">
                We&apos;re glad to see you again. Log in to continue tracking
                your finances
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-7 text-black"
              >
                <div className="flex flex-col gap-y-2">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email "
                    className="w-[100%] md:w-[80%] input"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-lg px-4 font-bold">
                      Email is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-y-2">
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="Enter Your password "
                    className="w-[100%] md:w-[80%] input"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-lg px-4 font-bold">
                      Password is required
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-[100%] md:w-[80%] button md:mt-7"
                >
                  Login
                </button>
              </form>
              <div className="px-2">
                <h1 className="text-[15px] md:text-xl py-2 mt-2">
                  Not a user ?{" "}
                  <Link
                    to={"/register"}
                    className="font-bold text-[17px] md:text-xl text-orange-600"
                  >
                    Register now
                  </Link>
                </h1>
                <h1 className="font-bold text-[17px] md:text-xl py-2 text-gray-500">
                  Forgot Your Password?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
