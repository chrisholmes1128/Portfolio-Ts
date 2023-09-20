import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

const { MONGODB, PORT } = process.env;

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send("Welcome to apollo server!!");
  });

  await mongoose.connect(
    "mongodb+srv://cholmes:heRbTo7d1KfVfLyU@portfoliodb.tlra5a7.mongodb.net/"
  );

  console.log("Mongoose connected...");

  app.listen(4000, () => console.log(`Server is running on port ${4000}`));
}

startServer();
