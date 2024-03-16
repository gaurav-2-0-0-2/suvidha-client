"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Fam {
  id: number;
  name: string;
  age: number;
  gender: string;
  relation: string;
}

export default function fetchAllMembers() {
  const [areMembersFetched, setAreMembersFetched] = useState(false);
  const [data, setData] = useState<Fam[]>([]);

  const router = useRouter();

  const handleFetchingOfAllMembers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/auth/familymembers"
      );
      console.log(response.data);
      setAreMembersFetched(true);
      setData(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClick = async()=>{
    try{
       await axios.post("http://localhost:4000/auth/get-otp",process.env.NEXT_PUBLIC_PHONE_NO);
       router.push("/validateRation")
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <h1>Fetch all the family members associated with the user</h1>
      {!areMembersFetched ? (
        <button
          onClick={handleFetchingOfAllMembers}
          className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 mt-10 text-center"
        >
          Fetch all Members
        </button>
      ) : (
        <div>
          {data.length > 0 ? (
            <table className="w-full mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Gender</th>
                  <th className="px-4 py-2">Relation</th>
                  {/* Add more table headers if needed */}
                </tr>
              </thead>
              <tbody>
                {data.map((fam) => (
                  <tr key={fam.id} className="border-b border-gray-200">
                    <td onClick={handleClick} className="px-4 py-2">{fam.name}</td>
                    <td className="px-4 py-2">{fam.age}</td>
                    <td className="px-4 py-2">{fam.gender}</td>
                    <td className="px-4 py-2">{fam.relation}</td>
                    {/* Add more table cells for additional data */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No family members found.</p>
          )}
        </div>
      )}
    </div>
  );
}
