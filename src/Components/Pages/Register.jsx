import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="container h-auto md:h-screen my-20 md:my-0  flex justify-center items-center">
        <div className="flex flex-wrap-reverse h-auto w-[95%] rounded-3xl  md:flex-nowrap   justify-center items-center bg-[var(--color-primary)] p-5 md:gap-14">
          <div className="">
            <p className="text-gray-400 text-2xl p-5">start for free</p>
            <h1 className="w-[50%] text-5xl p-3">Create Your Account</h1>
            <p className="text-gray-400 text-xl p-3">
              Already a member ?{" "}
              <Link to={"/login"} className="font-bold text-orange-600">
                Sign In
              </Link>
            </p>

            <form action="" className="grid grid-cols-4 mt-5">
              <input
                type="text"
                placeholder="name"
                className="col-span-2 md:col-span-3 input m-3 bg-[var(--color-secondary)]"
              />
              <input
                type="text"
                placeholder="age"
                className="col-span-2 md:col-span-1 input m-3 bg-[var(--color-secondary)]"
              />
              <input
                type="email"
                name="email"
                className="col-span-4 input m-3 bg-[var(--color-secondary)]"
                placeholder="email"
              />
              <input
                type="password"
                placeholder="password"
                className="col-span-4 input m-3 bg-[var(--color-secondary)]"
              />
              <button
                type="submit"
                className="button font-bold m-3 mt-4 col-span-2"
              >
                create account
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
