"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'


const cardHolderRegistrationForm: React.FC = () => {
  const {push} = useRouter(); 
  const[ formData, setFormData ] = useState({
    name: "",
    rationNumber: "",
    phoneNumber: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/userlogin", formData);
      console.log(response.data);
      push("/fetchAllMembers");
    } catch (error) {
      console.error("Error submitting form:", error);
    }

  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-12">Card Holder Login</h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="rationNumber"
            className="block mb-2 text-sm font-medium text-gray-900  "
          >
            Ration Number
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="rationNumber"
            name="rationNumber"
            value={formData.rationNumber}
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg     block w-full p-2.5 "
            placeholder="Enter Your Ration Number"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900  "
          >
            Card holder's name
          </label>
          <input
            onChange={handleChange}
            type="name"
            id="name"
            name="name"
            value={formData.name}
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg  ring-blue-500   block w-full p-2.5 "
            placeholder="Enter Your Name"
            required
          />
        </div>
	<div>
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Card holder's Phone Number
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            className=" border  text-gray-900 text-sm rounded-lg  ring-blue-500   block w-full p-2.5 border-blue-500"
            placeholder="Enter Your Phone Number"
            required
          />

	</div>
        <button
          type="submit"
          className="text-white bg-black outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 mt-10 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default cardHolderRegistrationForm;
