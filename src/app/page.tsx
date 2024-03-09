import Link from "next/link";
export default function Home() {
  return (
     <div>
	     <div className="flex gap-5">
               	<Link className="bg-black text-white px-4 py-2"  href={"/adminLogin"}>Login as Admin</Link>
               	<Link className="bg-black text-white px-4 py-2"  href={"/cardHolderLogin"}>Login as Card Holder</Link>
	     </div>
     </div>
  );
}
