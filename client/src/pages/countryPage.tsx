import React, { Component } from "react";
import CountryData from "./countryData";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/"
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

// const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

// class CountryPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {}
//     };
//   }
export default function CountryPage() {
  //   state = { code: "US" };
  //   const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  //   componentDidMount() {
  //     const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  //     this.setState({ data });
  //   }

  //   render() {
  return (
    <div>
      <CountryData />
    </div>
  );
  //   }
}

// export default CountryPage;
