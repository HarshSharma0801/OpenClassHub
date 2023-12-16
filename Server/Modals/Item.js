import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    Title:{type:String},
    year:{type:String},
    Images:[]
})


const Item = mongoose.model('Item' , ItemSchema);

export default Item