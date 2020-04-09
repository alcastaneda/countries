import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
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
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const CountryData: React.FC<RouteComponentProps> = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  const defaultCountry = test("US");
  const [country, setCountry] = useState(defaultCountry);

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  function test(value) {
    if (!data) {
      return {
        name: "United States",
        code: "US",
        native: "United States",
        capital: "Washington D.C.",
        emoji: "🇺🇸",
        currency: "USD,USN,USS",
        languages: [{ __typename: "Language", code: "en", name: "English" }]
      };
    }
    return data.countries.filter(obj => {
      return obj.code === value;
    })[0];
  }

  return (
    <div>
      <select
        value={country.code}
        onChange={event => {
          const newCountry = test(event.target.value);
          setCountry(newCountry);
        }}
      >
        {data.countries.map((country: any) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      <h1>
        {country.name} - {country.code}
      </h1>
      <h3>Capital</h3>
      <p>{country.capital}</p>
      <h3>Languages</h3>
      {country.languages.map((language: any) => (
        <p key={language.code}>{language.name}</p>
      ))}
    </div>
  );
};

export default CountryData;
