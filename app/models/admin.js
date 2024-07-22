import mongoose from "mongoose";
const { Schema, model } = mongoose;

const adminSchema = new Schema({
  email: String,
  password: String,
});

const modelName = "admin";

if (!mongoose.models[modelName]) {
  mongoose.model(modelName, adminSchema);
}

export default mongoose.models[modelName];