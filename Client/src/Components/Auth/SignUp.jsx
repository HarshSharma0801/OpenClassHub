import axios from 'axios'
import { useNavigate } from 'react-router';
import { useState  } from 'react';
const SignUp = ()=>{
   
    const navigate = useNavigate();
    const [UserData, SetUserData] = useState({
        username: "",
        email: "",
        password: "",
      });
    
      const HandleChange = (e) => {
        const { name, value } = e.target;
        SetUserData({
          ...UserData,
          [name]: value,
        });
      };
    
      const SignInApi = async (data) => {
        await axios.post("/signup", data).then((res) => {
          if (res.data.valid) {
            localStorage.setItem("UserInfo", JSON.stringify(res.data));
            navigate('/');
            
          } else {
            Seterr(true);
          }
        });
      };
    
      const UserSubmit = (e) => {
        e.preventDefault();
        SignInApi(UserData);
        SetUserData({
            name: "",
            email: "",
            password: "",
          })
      };


    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-6 space-y-8 bg-primaryDark  rounded-md">
          <div>
            <h2 className="text-3xl font-extrabold text-center text-primary">
              Create your account
            </h2>
            {/* {err && (
              <h1 className="text-[16px] md:text-xl pt-3 font-extrabold text-center text-red-500">
                User Already Found !!
              </h1>
            )} */}
          </div>
          <form className="space-y-6" onSubmit={UserSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-primary"
              >
                UserName
              </label>
              <input
                id="username"
                type="text"
                required
                name="username"
                value={UserData.name}
                onChange={HandleChange}
                placeholder="UserName"
                className="mt-1 p-2 w-full border border-primary rounded-md outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-primary"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={UserData.email}
                onChange={HandleChange}
                name="email"
                placeholder="Email"
                className="mt-1 p-2 w-full border border-primary rounded-md outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-primary"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={UserData.password}
                onChange={HandleChange}
                name="password"
                placeholder="Password"
                className="mt-1 p-2 w-full border border-primary rounded-md outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center  py-3 px-4 transition duration-150 ease-in-out active:bg-primary active:shadow-lg border border-primary rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary focus:shadow-lg focus:outline-none "
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    )

}


export default SignUp