import Company from "../models/Company.model";

const resolvers = {
  Query: {
    async getCompany(_: any, { ID }: any) {
      return await Company.findById(ID);
    },
    async getCompanies(_: any, { amount }: any) {
      return await Company.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createCompany(_: any, args: any) {
      const newCompany = new Company({
        name: args.companyInput.name,
        startDate: args.companyInput.startDate,
        endDate: args.companyInput.endDate,
        info: args.companyInput.info,
        createdAt: new Date().toISOString(),
        updatedAt: args.companyInput.updatedAt,
      });

      const res = await newCompany.save();

      return {
        id: res.id,
        name: res.name,
        startDate: res.startDate,
        endDate: res.endDate,
        info: res.info,
      };
    },
  },
  // async deleteCompany(_: any, { ID }: any) { not working for some reason
  //   const isDeleted = (await Company.deleteOne({ _id: ID })).deletedCount;
  //   // 1 = deleted, 0 = not deleted
  //   return isDeleted;
  // },
  // async updateCompany(
  //   _: any,
  //   { ID, companyInput: { name, startDate, endDate, info } }: any
  // ) {
  //   const isUpdated = (
  //     await Company.updateOne(
  //       { id: ID },
  //       { name: name, startDate: startDate, endDate: endDate, info: info }
  //     )
  //   ).modifiedCount;
  //   // 1 = updated, 0 = not updated
  //   return isUpdated;
  // },
};

export default resolvers;
