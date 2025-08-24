import React from 'react'
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Flag */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={flags.png}
          alt={flags.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Country Info */}
      <div className="p-4 text-gray-200">
        {/* Name */}
        <p className="text-lg font-semibold mb-2 text-white">
          {name.common.length > 10
            ? name.common.slice(0, 10) + "..."
            : name.common}
        </p>

        {/* Population */}
        <p className="text-sm mb-1">
          <span className="font-medium text-gray-400">Population:</span>{" "}
          {population.toLocaleString()}
        </p>

        {/* Region */}
        <p className="text-sm mb-1">
          <span className="font-medium text-gray-400">Region:</span>{" "}
          {region}
        </p>

        {/* Capital */}
        <p className="text-sm mb-4">
          <span className="font-medium text-gray-400">Capital:</span>{" "}
          {capital[0]}
        </p>

        {/* Read More Button */}
        <NavLink to={`/country/${name.common}`}>
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
            Read More
          </button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;


// country is passed as props from the Country component.
// const { flags, name, population, region, capital } = country; yaha deconstruct kia h, 
// eg. ab directly {region} likh sakte h, dont need to write country.region
