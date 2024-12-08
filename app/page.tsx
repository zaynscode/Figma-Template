import Header from "./components/header";
import Image from "next/image";

import React from 'react'

export default function Home() {
  return (
    <div className="h-screen ">
        <div>
        <Header />
      </div >
      
      <div className="w-1/2 h-[80%] absolute top-80 left-44 ">
        <h2 className="font-[Libre Bodoni] color-[#000000] font-bold text-[40px] loading-[85.8px] 
        tracking-[2.5%] ">IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h2>
        <Image className="mb-8" src={"/image/img2.png"}
        alt="paragraph image"
        width={902}
        height={147}
        />
        <button className="bg-[#A29875] text-[#FFFFFF] w-72 h-14 top-[730px] left-44 p-2.5 gap-2.5 rounded-[10px]">Explore Now</button>
      </div>

      <div className="w-[462px] h-[647px] top-48 left-[1164px] flex justify-self-end place-items-end 
      ">
        <Image src={"/image/img.svg"}
          alt="Hero Image"
          width={421.38}
          height={573.50}
          
          />
          </div>
      </div>
    
  )
}
