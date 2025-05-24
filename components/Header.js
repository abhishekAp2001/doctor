'use client'
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = ({title}) => {
    const router=useRouter()
  return (
    <div className="flex items-center gap-1 p-4 bg-white">
      <ChevronLeft onClick={()=>{
        router.push("/")
      }} size={28}  className=" text-black-700" />
      <div className="flex-1 text-[14px] font-semibold text-gray-800">
        {title}
      </div>
      <div className="h-6 w-6" />
    </div>
  );
};

export default Header;
