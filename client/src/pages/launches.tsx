// import React, { Fragment } from "react";
import { RouteComponentProps } from "@reach/router";

// interface LaunchesProps extends RouteComponentProps {}

// const Launches: React.FC<LaunchesProps> = () => {
//   return <div />;
// };

// export default Launches;

import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
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

interface LaunchesProps extends RouteComponentProps {}

const CountrySelect: React.FC<RouteComponentProps> = () => {
  const [country, setCountry] = useState("US");
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <select value={country} onChange={event => setCountry(event.target.value)}>
      {data.countries.map((country: any) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

// create a component that renders a select input for coutries
// function CountrySelect() {
//   const [country, setCountry] = useState("US");
//   const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

//   if (loading || error) {
//     return <p>{error ? error.message : "Loading..."}</p>;
//   }

//   return (
//     <select value={country} onChange={event => setCountry(event.target.value)}>
//       {data.countries.map((country: any) => (
//         <option key={country.code} value={country.code}>
//           {country.name}
//         </option>
//       ))}
//     </select>
//   );
// }

export default CountrySelect;
// ReactDOM.render(<CountrySelect />, document.getElementById('root'));
