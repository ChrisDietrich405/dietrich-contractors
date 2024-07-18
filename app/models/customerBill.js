import mongoose from "mongoose";
const { Schema, model } = mongoose;

const customerBillSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  service: String,
  amount: Number,
  status: String,
  clientSecret: String,
});

const modelName = "customer_bills";

if (!mongoose.models[modelName]) {
  mongoose.model(modelName, customerBillSchema);
}

export default mongoose.models[modelName];
