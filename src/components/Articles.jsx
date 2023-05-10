import React from "react"
import Awesome from "../assets/font-awesome-postcard.png"
import K8 from "../assets/kubernetes-postcard.png"

const Articles = () => {
  return (
    <div>
      <div
        className="
        min-[1300px]:ml-[8.3rem] 
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
        min-[665px]:ml-[6rem] 
        "
      >
        <h1
          className="
          text-white 
          text-[24px] 
          font-bold 
          min-[1300px]:mt-[2rem]
          min-[370px]:mt-[1.5rem]
          "
        >
          Articles Written
        </h1>

        <div
          className="
          min-[1300px]:flex 
          min-[1300px]:flex-row 
          min-[1300px]:mt-2
          min-[730px]:flex 
          min-[730px]:flex-row 
          min-[736px]:flex
          min-[736px]:flex-col
          min-[734px]:flex 
          min-[734px]:flex-col
          mt-2
          "
        >
          <div>
            <img
              src={Awesome}
              className="text-white 
                min-[1300px]:w-[500px] 
                min-[1300px]:h-[300px]
                min-[370px]:w-[320px] 
                min-[370px]:h-[200px]
                min-[730px]:h-[130px]
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
          "
            >
              <p
                className="text-white 
                text-[14px] 
                min-[1300px]:pt-[2rem] 
                min-[1300px]:pl-[2rem]
                min-[370px]:pr-[2rem]
                min-[370px]:pt-[2rem]
                min-[370px]:pl-[4.5rem]
                "
              >
                Font awesome in Material UI
              </p>
              <div className="min-[1300px]:flex min-[1300px]:flex-row">
                <button
                  className="
                  underline 
                  text-blue-700 
                  text-[14px] 
                  min-[1300px]:pt-[2rem] 
                  min-[1300px]:pl-[2rem]
                  min-[370px]:pt-[2rem] 
                  min-[370px]:pl-[6rem]
                  "
                >
                  <a
                    href="https://topcoder.hashnode.dev/implementing-font-awesome-brands-icon-in-material-ui"
                    target="_blank"
                  >
                    View on hashnode{" "}
                    <i class="fa fa-location-arrow" aria-hidden="true"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="min-[730px]:ml-[1rem]">
            <img
              src={K8}
              className="text-white 
                min-[1300px]:w-[500px] 
                min-[1300px]:h-[300px] 
                min-[1300px]:ml-[2rem]
                min-[1300px]:mt-[0rem]
                min-[370px]:w-[320px] 
                min-[370px]:h-[130px]
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
          min-[734px]:ml-[-1rem]
          min-[736px]:ml-[-1rem]  
          "
            >
              <p
                className="text-white 
                text-[14px] 
                min-[1300px]:pt-[2rem] 
                min-[1300px]:pl-[2rem]
                min-[370px]:pr-[2rem]
                min-[370px]:pt-[2rem]
                min-[370px]:pl-[3rem]"
              >
                K8s pod placement in Google Cloud
              </p>
              <div className="min-[1300px]:flex min-[1300px]:flex-row">
                <button
                  className="underline 
                text-blue-700 
                text-[14px] 
                min-[1300px]:pt-[2rem] 
                min-[1300px]:pl-[2rem]
                min-[370px]:pt-[2rem] 
                min-[370px]:pl-[6rem]
                "
                >
                  <a
                    href="https://medium.com/@ctochi46/kubernetes-pod-placement-node-selection-in-google-cloud-c783c2184106"
                    target="_blank"
                  >
                    View on medium{" "}
                    <i class="fa fa-location-arrow" aria-hidden="true"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
