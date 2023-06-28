const mongoose = require('mongoose');

export default async function dbConnect(){
    await mongoose.connect("mongodb://localhost:27017/NextJS13_4Todo",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
      })
}