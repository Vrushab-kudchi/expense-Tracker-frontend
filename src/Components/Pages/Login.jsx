import { Link } from "react-router-dom";

export default function Login() {
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
              <form action="" className="flex flex-col gap-7 text-black">
                <div className="">
                  <input
                    type="email"
                    placeholder="Enter your email "
                    className="w-[100%] md:w-[80%] input"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Enter Your password "
                    className="w-[100%] md:w-[80%] input"
                  />
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
