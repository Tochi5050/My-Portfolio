import React from "react"
import NavBar from "./NavBar"
import Express from "../assets/express-logo.png"
import Node from "../assets/nodejs-logo.png"
import Mongo from "../assets/mongodb-logo.png"
import GCP from "../assets/gcp-logo.png"

const Resume = () => {
  return (
    <div>
      <NavBar />
      <div
        className="
        min-[360px]:h-full
        min-[820px]:text-[24px]
        min-[820px]:h-full
        min-[280px]:h-full
        min-[540px]:h-[75rem]
        font-['Satoshi']
        bg-black 
        min-[1300px]:h-[85rem]
        max-[600px]:h-[52rem] 
        min-[700px]:h-[42rem] min-[700px]:bg-black
        min-[680px]:h-[75rem] min-[680px]:bg-black
        min-[667px]:h-[75rem] min-[667px]:bg-black
        min-[740px]:h-[69rem] min-[740px]:bg-black
        min-[1020px]:h-[65rem] min-[1020px]:bg-black
        min-[730px]:h-[75rem]
        min-[736px]:h-[75rem] min-[736px]:bg-black
        min-[400px]:h-[90rem] min-[400px]:bg-black
        min-[370px]:h-[93rem] min-[370px]:bg-black 
        min-[412px]:h-full min-[360px]:bg-black 
        min-[1024px]:h-full min-[1024px]:bg-black 
      "
      >
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
        min-[280px]:ml-[.8rem]
        "
        >
          <h1 className="text-white mt-[10rem] text-[32px] font-medium">
            Resume
          </h1>
          <p className="text-white">
            Learn more about my skills, qualifications and experience
          </p>
        </div>

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
        min-[280px]:ml-[.8rem]
        "
        >
          <h1 className="text-white font-bold mt-[24px] text-[18px] font-medium">
            Work Experience
          </h1>
          <p className="text-white">Present & Previous Jobs</p>
        </div>

        <div
          className="
        min-[1300px]:ml-[38rem] min-[1300px]:mt-[-5rem]
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
        min-[280px]:ml-[.8rem]
        "
        >
          <p className="text-white mt-[24px]">June 2022 - October 2022</p>
          <h1 className="text-white text-[16px] font-bold">
            SOFTWARE DEVELOPER
          </h1>
          <p className="text-white text-[15px]">
            MIMA BUSINESS &#40;Finance & Payments Startup&#41;
          </p>

          <ul
            className="list-disc text-white mr-[2rem] mt-[24px] 
          min-[1300px]:ml-[2rem]
          max-[600px]:ml-[2rem] 
          min-[700px]:ml-[2rem] 
          min-[680px]:ml-[1.8rem] 
          min-[667px]:ml-[1.8rem] 
          min-[740px]:ml-[2rem] 
          min-[1020px]:ml-[2rem] 
          min-[730px]:ml-[2rem]
          min-[736px]:ml-[2rem] 
          min-[400px]:ml-[2rem] 
          min-[370px]:ml-[2rem] 
          min-[370px]:mr-[2rem]
          min-[280px]:ml-[2rem] 
          min-[280px]:mr-[2rem]
          
          "
          >
            <li className="text-white font-normal">
              Utilized ReactJS and Mobx to integrate backend APIs to translate
              APIs to user facing features
            </li>
            <li className="text-white font-normal mt-[16px]">
              Developed PayBills, Transactions/Checkbooks & Business Insights
              screens for Mima&apos;s web based app, which was merged with the
              main codebased, within 25days of joining the company.
            </li>
          </ul>
        </div>

        <div
          className="
        min-[1300px]:ml-[38rem]
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
        min-[280px]:ml-[.8rem]
        "
        >
          <p className="text-white mt-[24px]">July 2022 - December 2022</p>
          <h1 className="text-white text-[16px] font-bold">
            ASSOCIATE CLOUD ENGINEER INTERN
          </h1>
          <p className="text-white text-[15px]">
            Andela &#40;Google Africa Developer Scholarship&#41;
          </p>

          <ul
            className="list-disc text-white mr-[2rem] mt-[24px] 
          min-[1300px]:ml-[2rem]
          max-[600px]:ml-[2rem] 
          min-[700px]:ml-[2rem] 
          min-[680px]:ml-[1.8rem] 
          min-[667px]:ml-[1.8rem] 
          min-[740px]:ml-[2rem] 
          min-[1020px]:ml-[2rem] 
          min-[730px]:ml-[2rem]
          min-[736px]:ml-[2rem] 
          min-[400px]:ml-[2rem] 
          min-[370px]:ml-[2rem] 
          min-[370px]:mr-[2rem]
          
          "
          >
            <li className="text-white font-normal">
              Designed and implemented scalable and cost-effective cloud
              infrastructure solutions in GCP.
            </li>
            <li className="text-white font-normal mt-[16px]">
              Configured and maintained cloud resources including virtual
              machines, networking and storage
            </li>
            <li className="text-white font-normal mt-[16px]">
              Used automation tools such as terraform to manage infrastructure
              as code, reducing manual effort.
            </li>
          </ul>
        </div>

        <div
          className="
        min-[1300px]:ml-[38rem]
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
        min-[280px]:ml-[.8rem]
        "
        >
          <p className="text-white mt-[24px]">October 2022 - November 2022</p>
          <h1 className="text-white text-[16px] font-bold">
            FRONTEND DEVELOPER
          </h1>
          <p className="text-white text-[15px]">HNG Internship</p>

          <ul
            className="list-disc text-white mr-[2rem] mt-[24px] 
          min-[1300px]:ml-[2rem]
          max-[600px]:ml-[2rem] 
          min-[700px]:ml-[2rem] 
          min-[680px]:ml-[1.8rem] 
          min-[667px]:ml-[1.8rem] 
          min-[740px]:ml-[2rem] 
          min-[1020px]:ml-[2rem] 
          min-[730px]:ml-[2rem]
          min-[736px]:ml-[2rem] 
          min-[400px]:ml-[2rem] 
          min-[370px]:ml-[2rem] min-[370px]:mr-[2rem]
          
          "
          >
            <li className="text-white font-normal">
              Collaborated with designers to create a marketplace for renting
              &quot;metabnbs&quot; and integrating payments with NFTs.
            </li>
            <li className="text-white font-normal mt-[16px]">
              Built a software developer portfolio based linktree clone
            </li>
            <li className="text-white font-normal mt-[16px]">
              Implemented responsive builds, modals and animations
            </li>
            <li className="text-white font-normal mt-[16px]">
              Utilized Tailwind CSS & ReactJS to create consistent and visually
              appealing designs across different devices
            </li>
          </ul>
        </div>

        <div
          className="
        min-[1300px]:ml-[5.8rem] min-[1300px]:mt-[5rem]
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
        min-[280px]:ml-[.8rem]
        "
        >
          <h1 className="text-white font-bold mt-[32px] text-[18px] font-medium">
            Tech Stack
          </h1>
          <p className="text-white text-[14px]">Tools, Technology & Language</p>
          <div
            className="
          flex flex-row mt-3 
          min-[1300px]:ml-[30rem] 
          min-[1300px]:mt-[-3.5rem]
  
          "
          >
            <img
              src={Express}
              className="
            h-10 
            mt-1.5
            min-[280px]:h-5 
            "
            />
            <img
              src={Node}
              className="
            ml-2 h-10 mt-1.5
            min-[280px]:h-5 
            "
            />
            <img
              src={Mongo}
              className="ml-2
            min-[280px]:h-8 
            "
            />
            <img src={GCP} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
