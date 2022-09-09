import React, { useState } from "react";

import Button from "../UI/Button";

const Login: React.FC = () => {
  const [isPasswordReset, setIsPasswordReset] = useState<boolean>(false);

  const ForgotPassword: React.FC = () => {
    return (
      <form className="flex flex-col my-10 border-2 p-5">
        <h1 className="font-black text-2xl mb-6">Reset Password</h1>
        <p className="mb-6">We will send you an email to reset your password</p>
        <label>Email Address</label>
        <input
          className="border-2 px-5 py-2 w-full mb-6"
          type="email"
          placeholder="Enter email address"
        />

        <Button
          buttonName="Submit"
          onClickHandler={function (): () => any {
            throw new Error("Function not implemented.");
          }}
        ></Button>
        <button
          onClick={() => setIsPasswordReset(false)}
          className="mt-2 w-full gap-2 py-2 px-4 border-2 border-orange-400 text-orange-400 text-center m-auto rounded-sm"
        >
          Cancel
        </button>
      </form>
    );
  };

  const LoginForm: React.FC = () => {
    return (
      <form className="flex flex-col mt-10 border-2 p-5 ">
        <h1 className="font-black text-2xl mb-6">
          KMC STORE <span className="text-orange-400">LOGIN</span>
        </h1>
        <label>Email Address</label>
        <input
          className="border-2 px-5 py-2 w-full mb-6"
          type="email"
          placeholder="Enter email address"
        />
        <label>Password</label>
        <input
          className="border-2 px-5 py-2 w-full mb-6"
          type="password"
          placeholder="Enter password here"
        />
        <Button
          buttonName="Sign in"
          onClickHandler={function (): () => any {
            throw new Error("Function not implemented.");
          }}
        ></Button>
        <button
          onClick={() => setIsPasswordReset(true)}
          className="mt-2 text-gray-600 underline"
        >
          Forgot Password?
        </button>
      </form>
    );
  };

  return (
    <div className="h-screen">
      {isPasswordReset ? <ForgotPassword /> : <LoginForm />}
    </div>
  );
};

export default Login;
