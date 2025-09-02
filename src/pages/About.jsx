import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        🌍 Here are some interesting facts <br /> we're proud of
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;

          return (
            <div
              key={id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-500/20 
                         transition transform hover:-translate-y-2 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {countryName}
              </h3>

              <p className="mb-2">
                <span className="font-medium text-gray-300">Capital:</span>{" "}
                {capital}
              </p>
              <p className="mb-2">
                <span className="font-medium text-gray-300">Population:</span>{" "}
                {population.toLocaleString()}
              </p>
              <p className="mt-4 italic text-gray-400 border-t border-gray-700 pt-3">
                "{interestingFact}"
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
