import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
    <section className="px-6 py-10 bg-gray-900 text-gray-200 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {country && (
          <div className="grid md:grid-cols-2 gap-10 items-start bg-gray-800 rounded-2xl shadow-lg p-6">
            {/* Flag */}
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full h-72 object-cover rounded-xl shadow-md"
            />

            {/* Country Info */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                {country.name.official}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <p>
                  <span className="font-semibold text-gray-400">Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Capital: </span>
                  {country.capital}
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-8">
          <NavLink to="/country">
            <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md transition">
              ← Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;


// useParam hook is used to get the dynamic part of the url.
// eg. if the url is /country/India then we will get "India" using useParam hook.
// we pass all data of useParam to variable params.
//.map((key) => country.name.nativeName[key].common) - dynamic [key] is passed here.


// use- ctrl+space to import any hook or component in react.