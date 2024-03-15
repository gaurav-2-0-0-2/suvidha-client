import React from "react";

const LoginForm: React.FC = () => {
  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     // Handle form submission logic here
  //   };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900  text-white"
          >
            Admin email
          </label>
          <input
            type="email"
            id="email"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg  ring-blue-500  border-blue-500 block w-full p-2.5 border-blue-500"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900  text-white"
          >
            Admin name
          </label>
          <input
            type="name"
            id="name"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg  ring-blue-500  border-blue-500 block w-full p-2.5 border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  ring-4  outline-none  ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-blue-600  hover:bg-blue-700   ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
