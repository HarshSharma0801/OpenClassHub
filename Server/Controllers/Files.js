import cloudinary from "cloudinary";
import express from 'express'
import Item from "../Modals/Item.js";

const File = express();


cloudinary.config({ 
    cloud_name: process.env.Cloudinary_Name, 
    api_key: process.env.Cloudinary_APIKEY, 
    api_secret: process.env.Cloudinary_SECRET,
    secure: true
  });

  File.post("/cloudinary", async (req, res) => {
    try {
      const files = req.body;
      const Photos = [];
      for (let i = 0; i < files.length; i++) {
         const uploadPhoto = await cloudinary.v2.uploader
         .upload(files[i] , {
          upload_preset:'BidRush',
          folder: 'BidRush',
          use_filename: true,
          overwrite:false
  
         });
       Photos.push( {url: uploadPhoto.url , photoId: uploadPhoto.public_id});
  
          
      }
      res.status(200).send(Photos);
  
    } catch (error) {
      console.log(error);
    }
  });



  File.post('/additem' ,  async(req,res)=>{

    const {Title , year  , Images} = req.body;
   

    const Data = {
        Title:Title,
        year:year,
        Images:Images
    }

   try {
       await Item.create(Data);
       console.log("added");
       res.status(200).json({valid:true});
   } catch (error) {
       console.log(error)
   }


});



File.get('/items' , async(req , res)=>{

    try {
      
      const items = await Item.find({});
      res.status(200).json({items:items})
      
    } catch (error) {
      console.log(error)
    }
  
  
  })



  export default File