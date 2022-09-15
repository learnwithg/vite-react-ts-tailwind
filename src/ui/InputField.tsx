import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const InputField: React.FC = () => {
  return (
    <div className="font-Karla">
      <label
        htmlFor="email"
        className="block text-leading font-bold text-gray-900"
      >
        Email Address
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs"
          placeholder="you@example.com"
          aria-describedby="email-description"
        />
      </div>
      <p className="mt-2 text-helper text-gray-500" id="email-description">
        We'll only use this for spam.
      </p>
    </div>
  );
};

export default InputField;
