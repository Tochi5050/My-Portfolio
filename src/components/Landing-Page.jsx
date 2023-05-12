import React from "react"
import "../App.css"
import NavBar from "./NavBar"

const LandingPage = () => {
  return (
    <div>
      <div
        className="no-repeat bg-landing bg-center 
      bg-[-26rem] 
      min-[600px]:bg-center 
      w-full h-screen 
      overflow-y-scroll 
      bg-no-repeat bg-cover 
      bg-landing-page
      min-[414px]:bg-[-38rem]
      min-[393px]:bg-[-38rem]
      min-[360px]:bg-[-33rem]
      min-[375px]:bg-[-28rem]
      min-[540px]:bg-[-28rem]
      min-[280px]:bg-[-30rem]
      "
      >
        <NavBar />

        <h1
          className="
         
        min-[600px]:text-[64px] 
        ml-[100px]  mt-[391px] font-semibold text-[#FFFFFF]   
        text-[22px] 
        max-[600px]:ml-[32px] mt-[300px] font-semibold text-[#FFFFFF] 
        min-[1300px]:ml-[5.8rem] min-[1300px]:mt-[391px]
        min-[370px]:mt-[25rem]
        min-[370px]:text-[35px] 
        min-[734px]:mt-[15rem]
        min-[768px]:mt-[35rem]
        min-[684px]:mt-[15rem]
        min-[665px]:mt-[15rem]
        min-[734px]:ml-[3rem]
        min-[684px]:ml-[3rem]
        min-[665px]:ml-[6rem]
        min-[734px]:text-[50px] 
        min-[766px]:text-[50px]
        min-[684px]:text-[50px]
        min-[665px]:text-[50px] 
        min-[374px]:text-[30px]
        min-[374px]:ml-[1rem]
        min-[1020px]:mt-[25rem] 
        min-[414px]:mt-[33rem]
        min-[390px]:mt-[30rem]
        min-[393px]:mt-[30rem]
        min-[360px]:mt-[28rem]
        min-[360px]:ml-[1rem]
        min-[540px]:mt-[26rem]
        min-[280px]:mt-[26rem]
        min-[280px]:ml-[1rem]
        min-[412px]:mt-[33rem]
         "
        >
          Tochi Chimezie
        </h1>
        <p
          className="
        min-[600px]:ml-[100px] text-[32px] mt-[-1rem] font-normal text-[#FFFFFF]   
        ml-[2.2rem] max-[600px]:text-[18px] mt-[.2rem]
        min-[1300px]:ml-[5.8rem]
        min-[734px]:ml-[3rem]
        min-[766px]:ml-[3rem]
        min-[684px]:ml-[3rem]
        min-[665px]:ml-[6rem]
        min-[374px]:text-[22px]
        min-[370px]:text-[25px]
        min-[374px]:ml-[1rem]
        min-[360px]:ml-[1rem]
        min-[280px]:ml-[1rem]  
        "
        >
          Software Engineer
        </p>
      </div>
    </div>
  )
}

export default LandingPage
