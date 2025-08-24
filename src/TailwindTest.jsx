import React from "react";

const TailwindTest = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Tailwind CSS Test
      </h1>

      {/* Typography and spacing */}
      <div className="mb-4 p-4 bg-white rounded shadow">
        <p className="text-lg text-gray-700 mb-2">
          This is a normal paragraph with <span className="font-semibold">bold</span> text.
        </p>
        <p className="text-sm text-gray-500 italic">This is italic and smaller text.</p>
      </div>

      {/* Buttons */}
      <div className="mb-4 p-4 bg-white rounded shadow flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Primary Button
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Success Button
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Danger Button
        </button>
      </div>

      {/* Flexbox */}
      <div className="mb-4 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-medium mb-2">Flex Layout:</h2>
        <div className="flex justify-between items-center">
          <div className="bg-yellow-200 p-4 rounded">Box 1</div>
          <div className="bg-yellow-300 p-4 rounded">Box 2</div>
          <div className="bg-yellow-400 p-4 rounded">Box 3</div>
        </div>
      </div>

      {/* Grid */}
      <div className="mb-4 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-medium mb-2">Grid Layout:</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-purple-200 p-4 rounded text-center">1</div>
          <div className="bg-purple-300 p-4 rounded text-center">2</div>
          <div className="bg-purple-400 p-4 rounded text-center">3</div>
        </div>
      </div>

      {/* Responsive design */}
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-medium mb-2">Responsive Text:</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Resize the browser to see text size change on different screen sizes.
        </p>
      </div>
    </div>
  );
};

export default TailwindTest;
