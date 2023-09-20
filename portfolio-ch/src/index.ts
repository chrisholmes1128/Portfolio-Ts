import { createLocalServer } from "./server";

const server = createLocalServer();

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
