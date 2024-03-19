import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import { markets } from './data';

function App() {
  // States for selected markets and products
  const [selectedMarkets, setSelectedMarkets] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);



  // Handler for market selection changes
  const handleMarketsChange = selectedOptions => {
    setSelectedMarkets(selectedOptions);
  };

  // Handler for product selection changes
  const handleProductsChange = selectedOptions => {
    setSelectedProducts(selectedOptions);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-red-500 p-4">
        <Sidebar
          markets={markets}
          onMarketsChange={handleMarketsChange}
          onProductsChange={handleProductsChange}
          selectedMarkets={selectedMarkets}
          selectedProducts={selectedProducts}
        />
      </div>
      <div className="w-3/4 p-4">
        <MainContent
          selectedMarkets={selectedMarkets}
          selectedProducts={selectedProducts}
        />
      </div>
    </div>
  );
}

export default App;
