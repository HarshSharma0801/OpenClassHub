import Header from "../Header/Header";
import axios from 'axios'
import { useState, useEffect } from "react";


const DisplayScreen = ()=>{

  const [open , setopen] = useState(false)
  const [data, setdata] = useState([]);
  const Getdata = async () => {
    try {
      await axios
        .get("/items", {
       
        })
        .then((res) => {
          console.log(res.data.items);
         
          setdata(res.data.items);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Getdata();
  }, []);


    return(
        <>
        <Header/>
        <div className="p-2  md:p-5 flex flex-col gap-2">
        {data &&
          data.map((main) => {
            return (
              <>
                <div key={main._id}>
                  <div className="flex flex-col bg-gray-300  shadow-lg rounded-xl p-2 md:p-4 cursor-pointer gap-1">
                    <div className="flex md:flex-row justify-between flex-col gap-1 text-lg">
                      <div>
                        <h1 className=" cursor-pointer hover:underline flex-1">
                          {main.Title}
                        </h1>
                      </div>
                      <div>
                        <h1 className=" text-sm md:text-lg text-gray-500">
                        View this as images 
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-between gap-1">
                      <div>
                        <h1 className="text-lg text-gray-600">
                          {main.year} year
                        </h1>
                      </div>
                     
                      <div>
                        <h1 onClick={()=>{
                          setopen(true);
                        }} className="text-lg text-gray-600 hover:underline">
                          
                         view
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`fixed inset-0 ${open ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-primary text-white p-6 md:p-8 w-[90%] md:w-[80%] rounded-2xl">
          <div className="flex justify-end cursor-pointer" onClick={()=>{
                setopen(false)
            }}>
                <div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
                </div>
             
            </div>
            <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Images
            </h2>
            </div>
          
         
            <div className="flex flex-col  justify-center">
         {main.Images.map(image=>{
          return <a href={image} className="text-gray-500">{image}</a>
         })}
      
            </div>
          </div>
        </div>
      </div>

              </>
            );
          })}
      </div>
        </>
    )

}

export default DisplayScreen