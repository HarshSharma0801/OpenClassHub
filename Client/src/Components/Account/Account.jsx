import Header from "../Header/Header";
import { useNavigate } from "react-router";
const Account = () => {

    const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className= "p-6 md:p-24 md:flex-row flex-col flex gap-4 md:gap-16">
        <div>
          <button
           onClick={()=>{
            navigate("/account/addfile")
          }}
           className="text-xl flex gap-2 p-3 px-6 rounded-full  border border-primary bg-white  hover:bg-primary hover:text-white">
            Upload{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
    
        <div>
          <button
        //    onClick={()=>{
        //     navigate("/account/yourorders")
        //   }} 
          className="text-xl flex gap-2 p-3 px-6 rounded-full  border border-primary bg-white  hover:bg-primary hover:text-white">
            Your Files{" "}
           
          </button>
        </div>
        <div>
           <button
            onClick={()=>{
            navigate("/account/signout")
          }}
           className="text-xl flex gap-2 p-3 px-6 rounded-full  border border-primary bg-white  hover:bg-primary hover:text-white"> 
            Login Info{" "}
           
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
