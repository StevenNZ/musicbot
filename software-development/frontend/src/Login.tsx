import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-11/12 h-screen lg:py-0">
      <div className="w-full bg-white rounded-2xl shadow md:mt-0 sm:max-w-md xl:p-0 border-blue-200 border-2">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required={true}
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to={"/signup"} target="_blank">
                <p className="text-sm font-medium text-primary-600 hover:underline">
                  Forgot password?
                </p>
              </Link>
            </div>
            <button
              type="submit"
              className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center primary-colour-bg"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-800">
              Don’t have an account yet?{" "}
              <Link to={"/signup"} target="_blank">
                <p className="font-medium inline-block text-primary-600 hover:underline">
                  Sign up
                </p>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
