import React from "react"
import NavBar from "./NavBar"
import Metabnb from "../assets/Metabnb.png"
import Mima from "../assets/Mima.png"
import Certificates from "./Certificates"
import Articles from "../components/Articles"
import Socials from "./Socials"
import Devs from "./Devs"

const Portfolio = () => {
  return (
    <div>
      <NavBar />

      <div
        className="
        font-['Satoshi']
        bg-black min-[1300px]:h-[120rem]
        max-[600px]:h-[52rem] 
        min-[700px]:h-[42rem] min-[700px]:bg-black
        min-[680px]:h-[220rem] min-[680px]:bg-black
        min-[667px]:h-[220rem] min-[667px]:bg-black
        min-[740px]:h-[215rem] min-[740px]:bg-black
        min-[1020px]:h-[215rem] min-[1020px]:bg-black
        min-[730px]:h-[85rem]
        min-[736px]:h-[215rem] min-[736px]:bg-black
        min-[734px]:h-[215rem] min-[736px]:bg-black
        min-[400px]:h-[160rem] min-[400px]:bg-black
        min-[370px]:h-[160rem] min-[370px]:bg-black
        min-[375px]:h-full min-[375px]:bg-black
        min-[360px]:h-full min-[360px]:bg-black 
        min-[412px]:h-full min-[360px]:bg-black 
        min-[820px]:h-full min-[820px]:bg-black 
        min-[768px]:h-full min-[768px]:bg-black
        min-[1024px]:h-full min-[1024px]:bg-black 
        min-[280px]:h-full min-[280px]:bg-black 
        
        
      "
      >
        <div
          className="
        min-[1300px]:ml-[5.8rem]
        max-[600px]:ml-[2rem] 
        min-[700px]:ml-[2rem] 
        min-[680px]:ml-[1.8rem] 
        min-[665px]:ml-[6rem] 
        min-[740px]:ml-[2rem] 
        min-[1020px]:ml-[3.6rem] 
        min-[730px]:ml-[2rem]
        min-[736px]:ml-[2rem] 
        min-[400px]:ml-[.8rem] 
        min-[370px]:ml-[.8rem]
        min-[360px]:ml-[.7rem]
        min-[280px]:ml-[.4rem]
        "
        >
          <h1 className="text-white mt-[10rem] text-[32px] font-medium">
            Portfolio
          </h1>
          <p className="text-white">Portfolio showcase of some of my work</p>
        </div>

        <div
          className="
          min-[1300px]:ml-[5.8rem]
        max-[600px]:ml-[2rem] 
        min-[700px]:ml-[2rem] 
        min-[680px]:ml-[1.8rem] 
        min-[665px]:ml-[6rem] 
        min-[740px]:ml-[2rem] 
        min-[1020px]:ml-[3.6rem] 
        min-[730px]:ml-[2rem]
        min-[736px]:ml-[2rem] 
        min-[400px]:ml-[.8rem] 
        min-[370px]:ml-[.8rem]
        min-[360px]:ml-[.7rem]
        min-[360px]:mr-[.7rem]
        min-[280px]:ml-[.7rem]
        min-[280px]:mr-[.7rem]
       
        
        "
        >
          <h1
            className="
          text-white 
          text-[24px] 
          font-bold 
          min-[1300px]:mt-[2rem]
          
          "
          >
            Live Projects Built
          </h1>
          <div
            className="
          min-[1300px]:flex 
          min-[1300px]:flex-row 
          min-[730px]:flex 
          min-[730px]:flex-row
          min-[734px]:flex 
          min-[734px]:flex-col
          min-[736px]:flex
          min-[736px]:flex-col  
          min-[1300px]:mt-2
          min-[820px]:ml-[5rem]
          min-[1280px]:flex 
          min-[1280px]:flex-row
          mt-2
          "
          >
            <div
              className="
            min-[1280px]:ml-[-5rem] 
            
            "
            >
              <img
                src={Metabnb}
                className="text-white 
                min-[1300px]:w-[500px] 
                min-[1300px]:h-[300px]
                min-[370px]:w-[320px] 
                min-[370px]:h-[200px]
                min-[730px]:h-[170px]
                min-[400px]:w-[360px]
                min-[680px]:w-[600px]
                min-[680px]:h-[300px]
                min-[667px]:w-[600px]
                min-[667px]:h-[300px]
                min-[736px]:h-[300px]
                min-[734px]:h-[300px]
                    
                "
              />
              <div
                className="
          border-gray-700
          rounded-md
          border-r
          border-l
          border-b
          mt-[-1rem]
          min-[1300px]:w-[500px] 
          min-[1300px]:h-[150px]
          min-[370px]:w-[320px] 
          min-[370px]:h-[170px]
          min-[400px]:w-[360px] 
          min-[680px]:w-[600px] 
          min-[680px]:h-[200px]
          min-[667px]:w-[600px] 
          min-[667px]:h-[200px]
          min-[360px]:h-[150px]
          min-[280px]:h-[150px]     
          "
              >
                <p
                  className="text-white 
                text-[14px] 
                min-[1300px]:pt-[2rem] 
                min-[1300px]:pl-[2rem]
                min-[370px]:pr-[2rem]
                min-[370px]:pt-[2rem]
                min-[370px]:pl-[2rem]
                min-[360px]:pl-[2rem]
                min-[360px]:pt-[3rem]
                min-[360px]:mt-[1rem]
                min-[280px]:pl-[2rem]
                min-[280px]:pt-[3rem]
                min-[280px]:mt-[1rem]
                "
                >
                  Rent a place away from home in the metaverse
                </p>
                <div
                  className="
                min-[1300px]:flex 
                min-[1300px]:flex-row
                min-[360px]:mb-[2rem]
                min-[280px]:mb-[2rem]
                "
                >
                  <button
                    className="
                  underline 
                  text-blue-700 
                  text-[14px] 
                  min-[1300px]:pt-[-1rem]
                  min-[1300px]:mt-[-.0rem] 
                  min-[1300px]:pl-[2rem]
                  min-[370px]:pt-[2rem] 
                  min-[370px]:pl-[2rem]
                  min-[360px]:pl-[2rem]
                  min-[280px]:pl-[2rem]
                  "
                  >
                    <a href="https://rentametabnb.netlify.app/" target="_blank">
                      View live website{" "}
                      <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </a>
                  </button>
                  <button
                    className="
                  underline 
                  text-blue-700 
                  text-[14px] 
                  pt-[2rem] 
                  pl-[2rem]
                  min-[280px]:mt-[-2rem]
                  min-[1300px]:pt-[-1rem]
                  min-[1300px]:pl-[2rem]
                  min-[1300px]:mt-[-.0rem] 
                  "
                  >
                    <a
                      href="https://github.com/Tochi5050/Metabnb"
                      target="_blank"
                    >
                      View Github repo{" "}
                      <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="
            min-[730px]:ml-[1rem]
            
            min-[1280px]:ml-[2rem] 
            min-[1280px]:mt-[-1rem]
            
            "
            >
              <img
                src={Mima}
                className="text-white 
                min-[1300px]:w-[500px] 
                min-[1300px]:h-[300px] 
                min-[1300px]:ml-[2rem]
                min-[1300px]:mt-[1rem]
                min-[370px]:w-[320px] 
                min-[370px]:h-[170px]
                min-[370px]:mt-[3rem]
                min-[730px]:mt-[0rem]
                min-[400px]:w-[360px] 
                min-[680px]:w-[600px]
                min-[680px]:h-[300px]
                min-[667px]:w-[600px] 
                min-[667px]:h-[300px]
                min-[736px]:mt-[1rem]
                min-[736px]:ml-[-1rem]
                min-[734px]:mt-[1rem]
                min-[734px]:ml-[-1rem]
                min-[360px]:mt-[2rem]
                min-[280px]:mt-[2rem]         
                "
              />

              <div
                className="
          border-gray-700
          rounded-md
          border-r
          border-l
          border-b
          mt-[-1rem]
          min-[1300px]:w-[500px] 
          min-[1300px]:h-[150px]
          min-[1300px]:ml-[2rem]
          min-[370px]:w-[320px] 
          min-[370px]:h-[170px]
          min-[400px]:w-[360px]
          min-[680px]:w-[600px] 
          min-[680px]:h-[200px] 
          min-[667px]:w-[600px] 
          min-[667px]:h-[200px] 
          min-[736px]:ml-[-1rem] 
          min-[734px]:ml-[-1rem] 
          min-[360px]:h-[150px]
          min-[280px]:h-[150px]
          min-[1280px]:mr-[2rem]
          "
              >
                <p
                  className="text-white 
                text-[14px] 
                min-[1300px]:pt-[2rem] 
                min-[1300px]:pl-[2rem]
                min-[370px]:pr-[2rem]
                min-[370px]:pt-[2rem]
                min-[370px]:pl-[2rem]
                min-[360px]:pl-[2rem]
                min-[360px]:pt-[3rem]
                min-[360px]:mt-[1rem]

                min-[280px]:pl-[2rem]
                min-[280px]:pt-[3rem]
                min-[280px]:mt-[1rem]
                "
                >
                  All the tools you need to run your business with ease
                </p>
                <div
                  className="
                min-[1300px]:flex 
                min-[1300px]:flex-row
                min-[360px]:pl-[-16rem]
                min-[280px]:pl-[-16rem]
                "
                >
                  <button
                    className="
                  min-[360px]:pb-[2rem] 
                  min-[360px]:pl-[7rem]
                  min-[280px]:pb-[2rem] 
                  min-[280px]:pl-[4rem] 
                  underline text-blue-700 
                  text-[14px] 
                  pt-[2rem] 
                  pl-[12rem]
                  "
                  >
                    <a href="https://www.trymima.com/" target="_blank">
                      View live website{" "}
                      <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Articles />
        <Certificates />
        <Socials />
        <Devs />
      </div>
    </div>
  )
}

export default Portfolio
