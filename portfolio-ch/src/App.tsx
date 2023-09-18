import "./App.css";
import { Box } from "@mui/material";
import { ThemeProvider } from "./theme";
import Pages from "./modules";
import { BrowserRouter } from "react-router-dom";
import { GlobalModalProvider } from "./contexts/ModalContext";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Box bgcolor="background.default" width="100vw" height="100vh">
          <GlobalModalProvider>
            <BrowserRouter>
              <Pages />
            </BrowserRouter>
          </GlobalModalProvider>
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
