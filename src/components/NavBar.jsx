import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <ul
        className="
        min-[600px]:bg-black h-[80px]
        bg-black h-[80px] mb-[-160px]
        
        "
      >
        <div
          className="
        flex min-[1300px]:flex min-[1300px]:justify-start min-[1300px]:ml-[2rem] 
        min-[700px]:ml-[-6.5rem] min-[700px]:justify-around
        min-[680px]:ml-[-6.5rem] min-[680px]:justify-around
        min-[667px]:ml-[-6.5rem] min-[667px]:justify-around
        min-[730px]:ml-[-6.7rem] min-[735px]:justify-around
        min-[760px]:ml-[-7rem] min-[760px]:justify-around
        min-[1020px]:ml-[-7rem] min-[1020px]:justify-around  
        "
        >
          <li className="visited:text-blue-500 ml-[.8rem] font-['Satoshi'] text-[#FAFAFA] text-[14px] mt-[27px] cursor-pointer min-[600px]:ml-[100px] text-[20px] mt-[27px] cursor-pointer min-[1020px]:text-[25px]">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-blue-500"
                  : "text-[#FAFAFA]-500"
              }
            >
              Home
            </Link>
          </li>
          <li className="ml-[2rem] font-['Satoshi'] text-[#FAFAFA] text-[14px] mt-[27px] cursor-pointer min-[600px]:ml-[48px] text-[20px] mt-[27px] cursor-pointer min-[1020px]:text-[25px]">
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-blue-500"
                  : "text-[#FAFAFA]-500"
              }
            >
              About
            </Link>
          </li>
          <li className="ml-[2rem] font-['Satoshi'] text-[#FAFAFA] text-[14px] mt-[27px] cursor-pointer  min-[600px]:ml-[48px] text-[20px] mt-[27px] cursor-pointer  min-[1020px]:text-[25px]">
            <Link
              to="/resume"
              className={
                location.pathname === "/resume"
                  ? "text-blue-500"
                  : "text-[#FAFAFA]-500"
              }
            >
              Resume
            </Link>
          </li>
          <li className="ml-[2rem] font-['Satoshi'] text-[#FAFAFA] text-[14px] mt-[27px] cursor-pointer  min-[600px]:ml-[48px] text-[20px] mt-[27px] cursor-pointer min-[1020px]:text-[25px]">
            <Link
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "text-blue-500"
                  : "text-[#FAFAFA]-500"
              }
            >
              Portfolio
            </Link>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default NavBar
