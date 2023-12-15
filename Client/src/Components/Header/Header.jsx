import { useNavigate } from "react-router"
import { useState , useEffect } from "react";
import axios from "axios";
const Header = ()=>{

const navigate = useNavigate();
const [isData, setisData] = useState();
const [User, SetUser] = useState();

useEffect(() => {
    const getUser = () => {
      const data = JSON.parse(localStorage.getItem("UserInfo"));
      if (data) {
        const token = data.access;
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const config = {
          headers: headers,
        };

        axios.get("/Token", config).then((res) => {
          if (res.data.valid) {
            SetUser(res.data.Userdata);
            setisData(true);
          } else {
            setisData(false);
          }
        });
      } else {
        setisData(false);
      }
    };

    getUser();
  }, []);


    return (
        <>
          <div className="flex justify-between md:justify-around items-center  w-[100%] text-white bg-primary p-4 ">
        <div>
          <h1
            onClick={() => {
              navigate("/");
            }}
            className="md:text-3xl text-lg  cursor-pointer"
          >
            OpenClassHub
          </h1>
        </div>
        <div className="flex gap-1 justify-center md:hidden">
        <div className="flex md:hidden  justify-center rounded-2xl bg-white ">
          <input
            type="text"
            className="text-primary text-sm rounded-2xl w-[35vw] outline-none  font-semibold p-3"
            placeholder="search"
          />
          <div className="text-center flex justify-center items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        
          <div onClick={()=>{
                    navigate('/account')
                }}>
            <svg
             
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className="hidden md:flex  justify-center rounded-2xl bg-white ">
          <input
            type="text"
            className="text-primary text-xl rounded-2xl w-[35vw] outline-none  font-semibold p-3"
            placeholder="search"
          />
          <div className="text-center flex justify-center items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        <div className=" hidden md:flex gap-8 p-2 items-center text-center justify-center">
        
         

          <div>
            {isData ? (
              <button
               onClick={()=>{
                    navigate('/account')
                }}
                className="flex px-[19px] py-1 text-[17px] border-2 border-white rounded-xl bg-primary hover:text-primary hover:bg-white"
              >
                Hi, {User && User.username}
              </button>
            ) : (
              <button
                onClick={()=>{
                    navigate('/login')
                }}
                className="p-3 px-6 rounded-full  border-2 border-white bg-primary hover:text-primary hover:bg-white"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
        </>
    )

}


export default Header