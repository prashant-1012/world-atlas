import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="w-full flex justify-center py-6">
      {/* Main box */}
      <div className="bg-gray-800 p-4 rounded-2xl shadow-lg flex flex-wrap gap-4 items-center justify-center w-full max-w-4xl">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleInputChange}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Sort Asc */}
        <button
          onClick={() => sortCountries("asc")}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow"
        >
          Sort: Asc
        </button>

        {/* Sort Desc */}
        <button
          onClick={() => sortCountries("des")}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow"
        >
          Sort: Desc
        </button>

        {/* Select Dropdown */}
        <select
          className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;



// in javaScript : [...countries] this is how we duplicate and use the data. 
// (we dont disturb the original data(eg. countries), so we use 3 dots to duplicate the data & then use it)