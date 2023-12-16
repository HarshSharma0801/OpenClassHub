import Header from "../Header/Header";
import {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router";
import Loader from "../loader";

const AddFile = () => {
  const [SelectedFile, SetSelectedFile] = useState();
  const [FileInput, SetFileInput] = useState([]);
  const [isDataReady, SetDataReady] = useState(false);
  const [load,setload] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Title: "",
    Images: [],
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

  
      setFormData({ ...formData, [name]: value });
    
  };

  const HandlePhotoChange = (e) => {
    const file = e.target.files[0];
    formData.Images.push(file);
    UrlPhotos(file);
  };
  
const UrlPhotos = (files) => {
const reader = new FileReader();

reader.readAsDataURL(files);
reader.onloadend = () => {
  SetSelectedFile(reader.result);
};
};

if (SelectedFile != "") {
SelectedFile && FileInput.push(SelectedFile);
SetSelectedFile("");
}
const AddItemApi = async(Data)=>{
 
  

    await axios.post('/additem' , Data).then(res=>{
      if(res.data.valid){
                navigate('/');

      }
    })

  
}
const GetPhotosLink = (arr) => {
  const urls = arr.map(item=>item.url);
  if (arr) {
    setFormData({ ...formData, Images: urls });
    SetDataReady(true);
  }
};
if(isDataReady){
  AddItemApi(formData);
}
const FormPhotos = async(data)=>{
    
  await axios.post('/cloudinary' , data).then(res=>{
    if(res.data){
       GetPhotosLink(res.data);
    }

 });

}

  const add = (e) => {
    e.preventDefault();
    setload(true);
    FormPhotos(FileInput);

  };
  return (
    <>
    {load && <Loader/>}
      <Header />
      <div className="flex justify-center items-center p-5">
        <div className="text-3xl font-semibold">
          <h1>Upload File</h1>
        </div>
      </div>
      <div>
        <form onSubmit={add} className="h-[100%] ml-3 md:ml-0 mt-10 mb-10">
        <div className="flex flex-col md:gap-8 gap-3 md:m-5">

        <div className="flex flex-col justify-center ">
          <label
            className="flex  gap-[0.5rem] md:gap-1  text-gray-700 text-sm md:text-2xl md:font-bolder font-bold mb-2 "
            htmlFor="ItemName"
          >
            Title{" "}
          
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="Title"
            id="ItemName"
            placeholder="Title"
            className="w-1/2 outline-none border border-gray-400 p-1 md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-sm rounded-lg"
          />
        </div>
        <div>
          <label
            className="flex md:gap-1 gap-[0.5rem] text-gray-700 text-sm md:text-xl md:font-bolder font-bold mb-2 "
            htmlFor="year"
          >
            Year{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-5 md:w-7 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </label>
          <select
            onChange={handleChange}
            name="year"
            id="year"
            className="w-1/2 outline-none border border-gray-400 p-1 md:p-4 md:text-xl md:placeholder:text-xl placeholder:text-sm rounded-lg"
          >
            <option value="">Select a category</option>
            <option value="1st">1st year</option>
            <option value="2nd">2nd year</option>
            <option value="3rd">3rd year</option>
            <option value="4th">4th year</option>

          </select>
        </div>
          <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-4">
            {FileInput &&
              FileInput.map((url) => {
                return (
                  <div className="bg-gray-200 aspect-video	 rounded-lg overflow-hidden">
                    <img src={url} alt="photo" className="w-full h-full " />
                  </div>
                );
              })}

            <label className=" border border-gray-400 md:p-8 cursor-pointer mt-3 p-4 md:text-2xl text-gray-600 md:rounded-lg text-center flex justify-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-5 md:w-7 md:h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>{" "}
              Upload{" "}
              <input
                type="file"
                onChange={HandlePhotoChange}
                name="photos"
                className="hidden"
              />
            </label>
          </div>
        
          </div>
          <div className="">
            <button
              type="submit"
              className="mt-3 md:w-1/4 my-[30px]  mx-auto flex justify-center md:text-xl border border-transparent p-2 md:py-4 text-sm font-medium rounded-md text-white bg-primary hover:bg-clack focus:outline-none focus:ring-2 "
            >
              upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFile;
