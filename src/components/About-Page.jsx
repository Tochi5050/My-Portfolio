import React from "react"
import ProfilePic from "../assets/profile-image.png"
import NavBar from "./NavBar"
import AboutPageImageTwo from "../assets/about-page-icon-2.png"
import AboutPageImageOne from "../assets/about-page-icon-1.png"

const AboutPage = () => {
  return (
    <div>
      <div
        className="
        bg-black h-screen
        min-[700px]:bg-black min-[700px]:h-screen
        min-[667px]:bg-black min-[667px]:h-screen
        min-[740px]:bg-black min-[740px]:h-screen
        min-[820px]:h-[45rem] min-[820px]:bg-black
        min-[1300px]:h-screen
  "
      >
        <NavBar />
        <div
          className="
        bg-black min-[1300px]:h-[38rem]
        max-[600px]:h-[52rem] 
        min-[700px]:h-[42rem] min-[700px]:bg-black
        min-[680px]:h-[49rem] min-[680px]:bg-black
        min-[667px]:h-[45rem] min-[667px]:bg-black
        min-[740px]:h-[45rem] min-[740px]:bg-black
        min-[1020px]:h-[60rem] min-[1020px]:bg-black
        min-[730px]:h-[47rem]
        min-[736px]:h-[45rem] min-[736px]:bg-black
        min-[400px]:h-[57rem] min-[400px]:bg-black
        min-[370px]:h-[60rem] min-[370px]:bg-black
        min-[360px]:h-[63rem] min-[360px]:bg-black
        min-[820px]:h-[55rem] min-[820px]:bg-black
        min-[912px]:h-[67rem] min-[912px]:bg-black
        min-[280px]:h-[74rem] min-[280px]:bg-black
        min-[412px]:h-[62rem]
        min-[1280px]:h-[68rem] min-[1280px]:bg-black
        min-[540px]:h-[55rem]   
      "
        >
          <img
            className="
        min-[1300px]:ml-[920px] 
        min-[1300px]:mt-[5rem] 
        min-[1300px]:h-screen
        max-[600px]:mt-[35rem] max-[600px]:h-[30rem] min-[400px]:ml-[2rem]
        min-[700px]:ml-[15rem] min-[700px]:mt-[28rem] min-[700px]:h-screen
        min-[680px]:ml-[15rem] min-[680px]:mt-[28rem] min-[680px]:h-screen
        min-[667px]:ml-[15rem] min-[667px]:mt-[24rem] min-[667px]:h-screen
        min-[760px]:ml-[17rem] min-[740px]:mt-[26.5rem] min-[740px]:h-[22rem]
        min-[1020px]:ml-[20rem] min-[1020px]:mt-[26.5rem] min-[1020px]:h-[38rem]
        min-[730px]:mt-[26rem]
        min-[820px]:mt-[28rem]
        min-[540px]:ml-[7rem]
        min-[1280px]:ml-[25rem]
        min-[390px]:ml-[1.5rem]
        "
            src={ProfilePic}
          />
          <div
            className="
           
          font-['Satoshi'] text-white       
          max-[600px]:mt-[-68rem] max-[600px]:ml-[14px]
          min-[700px]:ml-[2rem]
          min-[680px]:ml-[2rem]
          min-[667px]:ml-[2rem] min-[667px]:mt-[-45rem]
          min-[1300px]:ml-[95px] 
          min-[1300px]:mt-[-36rem]
          min-[1020px]:ml-[4rem] min-[1020px]:mt-[-50rem]
          min-[280px]:mt-[-69rem]
          min-[280px]:mt-[-68rem]
          
          "
          >
            <div
              className="
            max-[600px]:mt-[12rem]
            min-[700px]:mt-[-42rem] 
            min-[1300px]:mt-[1rem]
            min-[680px]:mt-[-42rem]
            min-[667px]:mt-[10rem]  
            
            "
            >
              <h1
                className="
                text-[40px] 
                font-medium 
                min-[667px]:mt-[2rem] 
                min-[667px]:text-[26px]
                min-[730px]:mt-[5rem] 
                min-[1020px]:mt-[-54rem]
                min-[1300px]:mt-[5rem]
                min-[1020px]:text-[40px]
                max-[1300px]:text-[40px]
                
                "
              >
                About
              </h1>
              <p className="mb-[32px] min-[1020px]:text-[22px] min-[1300px]:text-[16px]">
                ctochi46@gmail.com
              </p>
            </div>
            <p
              className="
            min-[1020px]:text-[18px] 
            min-[820px]:text-[20px] 
            min-[1300px]:text-[16px]
            min-[280px]:mt-[-2rem]
            min-[1280px]:text-[24px]
            "
            >
              Hi, I am Tochi. a passionate software engineer who specializes in
              creating top-notch web and mobile applications
            </p>
            <p className="min-[1280px]:text-[24px] min-[1020px]:text-[18px] min-[820px]:text-[20px] min-[1300px]:text-[16px]">
              that can scale seamlessly. With my experience in working with
              fintech startups and building cloud infrastructure,
            </p>
            <p className="min-[1280px]:text-[24px] min-[1020px]:text-[18px] min-[820px]:text-[20px] min-[1300px]:text-[16px]">
              I possess a keen eye for detail and a knack for delivering
              projects that exceed expectations. In my free time, I enjoy
            </p>
            <p className="min-[1280px]:text-[24px] min-[1020px]:text-[18px] min-[820px]:text-[20px] min-[1300px]:text-[16px]">
              staying up-to-date with the latest industry trends by watching
              tech content videos and attending tech conferences.
            </p>
          </div>
          <div
            className="
            text-white mt-[-32rem] font-['Satoshi'] ml-[30px]
            max-[600px]:mt-[32rem] max-[600px]:h-[18rem] max-[600px]:ml-[1rem]
            min-[700px]:mt-[26rem]
            min-[1300px]:mt-[2rem] 
            min-[1300px]:ml-[95px]
            min-[680px]:mt-[28rem]
            min-[667px]:mt-[22rem]
            min-[730px]:mt-[25rem]
            min-[760px]:mt-[25rem]
            min-[1020px]:mt-[42rem] min-[1020px]:ml-[3rem]
            max-[1300px]:mt-[55rem] min-[1020px]:ml-[3rem]
            min-[820px]:mt-[28rem] 
            min-[912px]:mt-[30rem]
            min-[540px]:mt-[40rem]
            min-[412px]:mt-[40rem]
            min-[360px]:mt-[35rem]

            "
          >
            <h1
              className="
              mt-[48px] text-[32px] font-medium
              min-[1020px]:text-[38px]
              min-[1300px]:text-[32px]
              min-[912px]:text-[42px] 
              min-[1280px]:text-[42px]
              "
            >
              What I do
            </h1>

            <div className="flex">
              <img
                className="
                  mt-[32px] h-[25px] 
                  min-[912px]:mt-[42px] min-[912px]:h-[38px] 
                  "
                src={AboutPageImageOne}
              />
              <p
                className="
                mt-[2rem] ml-[.7rem] text-[14px]
                min-[1020px]:text-[20px]
                max-[1300px]:text-[20px]
                min-[1300px]:mt-[3rem]
                min-[1300px]:text-[16px]
                min-[912px]:text-[30px] 
                min-[1280px]:text-[30px]
                "
              >
                Build and deliver web components that cut across backend & UI
                development
              </p>
            </div>
            <div className="min-[1300px]:mt-[-1rem] flex">
              <img
                className="mt-[32px] h-[25px] min-[912px]:mt-[42px] min-[912px]:h-[38px] "
                src={AboutPageImageTwo}
              />
              <p className="min-[1300px]:mt-[3rem] min-[1280px]:text-[30px] min-[912px]:text-[30px] mt-[2rem] ml-[.7rem] text-[14px] min-[1020px]:text-[20px] max-[1300px]:text-[20px] min-[1300px]:text-[16px]">
                Configure cloud resources and scale web components built with
                virtual machines in the cloud
              </p>
            </div>
            <div className="min-[1300px]:mt-[-1rem] flex max-[600px]:mt-[4px]">
              <img
                className="min-[1280px]:text-[30px] mt-[32px] h-[25px] min-[912px]:mt-[42px] min-[912px]:h-[38px] "
                src={AboutPageImageOne}
              />
              <p
                className="
              min-[1300px]:mt-[3rem] 
              min-[1280px]:text-[30px] 
              min-[912px]:text-[30px] 
              mt-[2rem] ml-[1rem] 
              text-[14px] 
              min-[1020px]:text-[20px] 
              max-[1300px]:text-[20px] 
              min-[1300px]:text-[16px]
              "
              >
                Configure and ship web microservices with docker & kubernetes on
                Google kubernetes engine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
