import React from "react"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
const Socials = () => {
  return (
    <div>
      <div
        className="
        min-[1300px]:ml-[5.8rem]
        max-[600px]:ml-[2rem] 
        min-[700px]:ml-[2rem] 
        min-[680px]:ml-[1.8rem] 
        min-[667px]:ml-[1.8rem] 
        min-[740px]:ml-[2rem] 
        min-[1020px]:ml-[3.6rem] 
        min-[730px]:ml-[2rem]
        min-[736px]:ml-[2rem] 
        min-[400px]:ml-[.8rem] 
        min-[370px]:ml-[.8rem]
        min-[375px]:ml-[1rem]
        min-[665px]:ml-[6rem] 
        min-[820px]:ml-[7rem]
        min-[360px]:ml-[1rem]
        min-[360px]:mr-[.7rem]
        min-[360px]:mt-[1.5rem]
        min-[280px]:ml-[1rem]
        min-[280px]:mr-[.7rem]
        min-[280px]:mt-[1.5rem]
        "
      >
        <h1
          className="
          text-white 
          text-[24px] 
          font-bold 
          min-[1300px]:mt-[2rem]
          min-[370px]:mt-[2rem]
          "
        >
          Connect with me
        </h1>
      </div>
      <div
        className="
      flex flex-row 
      min-[1300px]:mt-[2rem] 
      min-[1300px]:ml-[5.8rem] 
      min-[1300px]:space-x-[6rem] 
      min-[370px]:ml-[1rem]
      min-[370px]:space-x-[3rem]
      min-[370px]:mt-[1rem] 
      min-[730px]:ml-[2rem]
      min-[680px]:ml-[2rem]
      min-[667px]:ml-[2rem] 
      min-[1020px]:ml-[3.5rem]   
      min-[665px]:ml-[6rem]
      min-[820px]:ml-[7rem]
      min-[360px]:ml-[1rem]
      min-[360px]:mr-[.7rem]
      min-[360px]:mt-[1.5rem]
      min-[360px]:space-x-[4rem] 
      min-[280px]:ml-[1rem]
      min-[280px]:mr-[.7rem]
      min-[280px]:mt-[1.5rem]
      min-[280px]:space-x-[4rem] 
      "
      >
        <a href="https://twitter.com/ctochi46" target="_blank">
          <TwitterIcon className="text-blue-500 cursor-pointer" />
        </a>
        <a href="https://github.com/Tochi5050" target="_blank">
          <GitHubIcon className="text-gray-500 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/tochi-chimezie-1a71a724a/"
          target="_blank"
        >
          <LinkedInIcon className="text-blue-500 cursor-pointer" />
        </a>
      </div>
    </div>
  )
}

export default Socials
