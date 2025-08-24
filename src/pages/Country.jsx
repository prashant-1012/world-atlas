import React from "react";
import { useEffect, useState, useTransition } from "react";
import CountryCard from "../components/layout/CountryCard";
import { Loader } from "../components/UI/Loader";
import { getCountryData } from "../api/postApi";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Search + Filter bar */}
      <div className="px-7 py-6">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
      </div>

      {/* Country Grid */}
      <ul className="grid gap-6 px-7 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>

      {/* If no country found */}
      {filterCountries.length === 0 && (
        <p className="text-center text-lg font-medium text-gray-600 dark:text-gray-300 py-10">
          No countries found 😢
        </p>
      )}
    </section>
  );
};

export default Country;



// for cards it is best to use ul and li tags
// we have called this component CountryCard inside the Country component.
// we will pass the country data as props to the countryCard component.
// we have given key to the CountryCard component because it is inside a loop.

// [countries, setCountries] = all countries are listed here, (api)