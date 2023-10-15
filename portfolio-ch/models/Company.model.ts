import { model, Schema } from "mongoose";

const companySchema = new Schema({
  name: String,
  startDate: String,
  endDate: String,
  info: String,
  isReadOnly: Boolean,
  updatedAt: String,
});

const Company = model("Company", companySchema);

export default Company;
