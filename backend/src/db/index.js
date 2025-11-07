import mongoose from "mongoose";


const connectDb = async() =>{
    try {
       const connection =  await mongoose.connect(`${process.env.MONGODB_URL}`)
       console.log(`mongoDb connected Succesfully: ${connection.connection.host}`)

    } catch (error) {
        console.log("MongoDb connection Failed!",error);
    }
};

export default connectDb;