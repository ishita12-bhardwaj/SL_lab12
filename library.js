const mongoose=require("mongoose")
  const { Schema } = mongoose;

  const libraryschema = new Schema({
    bookname:  String, // String is shorthand for {type: String}
    issuer: String,
    duedate: String,

    
  });
  module.exports=mongoose.model("mylibrary",libraryschema,"SL-LAB-student")
