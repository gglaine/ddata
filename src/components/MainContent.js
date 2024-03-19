import React from 'react';

const MainContent = ({ selectedMarkets, selectedProducts }) => {
  return (
    <div className="p-5 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Selections</h2>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Selected Markets:</h3>
        {selectedMarkets.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {selectedMarkets.map((market, index) => (
              <li key={index} className="text-gray-600">{market.label}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No markets selected.</p>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Selected Products:</h3>
        {selectedProducts.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {selectedProducts.map((product, index) => (
              <li key={index} className="text-gray-600">{product.label}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No products selected.</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;

