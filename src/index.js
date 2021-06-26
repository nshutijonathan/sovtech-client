import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { ExchangePeaple } from "./components/ExchangePeaple";
const client = new ApolloClient({
  uri: "https://sovtech-be.herokuapp.com/",
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <ExchangePeaple />
  </ApolloProvider>,
  document.getElementById("root")
);
