import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chrisdietrich366:Devindiet1@dietrichlandcare.kq6v5mn.mongodb.net/dietrich_contractors"
    );
    return mongoose;
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
