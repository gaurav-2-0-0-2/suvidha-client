"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'


const adminLoginForm: React.FC = () => {
  useEffect(()=>{
    alert("An OTP has been sent to your registed mobile number");
  },[])
  const [info, setInfo] = useState('');
  const {push} = useRouter(); 
  const[ formData, setFormData ] = useState({
    otp:"",
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NO
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/verify-otp", formData);
      console.log(response.data);
      alert("Your ration order has been placed");
    } catch (error) {
      console.error("Error submitting form:", error);
    }

  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-12">Validate Ration</h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="rationNumber"
            className="block mb-2 text-sm font-medium text-gray-900  "
          >
            Verify OTP  
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="otp"
            name="otp"
            value={formData.otp}
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 "
            placeholder="Enter OTP sent to your Reg. Ph. No."
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

export default adminLoginForm;
