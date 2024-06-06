import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../../feature/auth/authSlice";
import { useEffect } from "react";

export default function Register() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const parsedData = {
      ...data,
      age: parseInt(data.age, 10),
    };
    dispatch(userRegistration(parsedData));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  return (
    <>
      <div className="container h-auto md:h-screen my-60 md:my-0 flex justify-center items-center">
        <div className="flex flex-wrap-reverse h-auto w-[95%] rounded-3xl md:flex-nowrap justify-center items-center bg-[var(--color-primary)] p-5 md:gap-14">
          <div>
            <p className="text-gray-400 text-2xl p-5">Start for free</p>
            <h1 className="w-[50%] text-5xl p-3">Create Your Account</h1>
            <p className="text-gray-400 text-xl p-3">
              Already a member?{" "}
              <Link to={"/login"} className="font-bold text-orange-600">
                Sign In
              </Link>
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-4 mt-5 gap-3"
            >
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="col-span-4 md:col-span-3 input m-3 bg-[var(--color-secondary)]"
              />
              <input
                type="number"
                placeholder="Age"
                {...register("age")}
                className="col-span-4 md:col-span-1 input m-3 bg-[var(--color-secondary)] no-spinner"
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="col-span-4 input m-3 bg-[var(--color-secondary)]"
              />
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="col-span-4 input m-3 bg-[var(--color-secondary)]"
              />
              <button
                type="submit"
                className="button font-bold m-3 mt-4 col-span-4"
              >
                Create Account
              </button>
            </form>
          </div>
          <div className="w-full">
            <img
              src="./walking.gif"
              alt="girl walking"
              className="rounded-3xl w-[100%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
