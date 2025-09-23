import mongoose, { Schema } from "mongoose";

const meetingScheme =  new Schema({
     user_id : {
        type : String
     },
     meetingCode : {
        type : String , 
        required : true ,
     },
     date : {
        type : Date , 
        default : Date.now ,
       required : true 
     },
     token : {
        type : String , 
     },
})

const Meeting = mongoose.model("Meeting" , meetingScheme);
export { Meeting };