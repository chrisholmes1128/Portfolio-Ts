import Company from "../models/Company.model";

const resolvers = {
  Query: {
    async getCompany(_: any, { ID }: any) {
      return await Company.findById(ID);
    },
    async getCompanies(_: any, { amount }: any) {
      return await Company.find().sort({ startDate: "desc" }).limit(amount);
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
        isReadOnly: false,
      });

      const res = await newCompany.save();

      return {
        id: res.id,
        name: res.name,
        startDate: res.startDate,
        endDate: res.endDate,
        info: res.info,
        isReadOnly: res.isReadOnly,
      };
    },
    async deleteCompany(_: any, { ID }: any) {
      const isDeleted = (await Company.deleteOne({ _id: ID })).deletedCount;
      // 1 = deleted, 0 = not deleted
      return isDeleted;
    },
    async updateCompany(
      _: any,
      { ID, companyInput: { name, startDate, endDate, info, isReadOnly } }: any
    ) {
      const isUpdated = (
        await Company.updateOne(
          { _id: ID },
          {
            name: name,
            startDate: startDate,
            endDate: endDate,
            info: info,
            isReadOnly: isReadOnly,
          }
        )
      ).modifiedCount;
      // 1 = updated, 0 = not updated
      return isUpdated;
    },
  },
};

export default resolvers;
