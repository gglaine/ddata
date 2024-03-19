import React from 'react';
import Select from 'react-select';

const Sidebar = ({ markets, onMarketsChange, onProductsChange, selectedMarkets, selectedProducts }) => {
  // Create options for markets
  const marketOptions = markets.map(market => ({
    value: market.name,
    label: market.name
  }));

  // Filter and create options for products based on selected markets
  let productOptions = [];
  if (selectedMarkets && selectedMarkets.length > 0) {
    markets.forEach(market => {
      if (selectedMarkets.find(selectedMarket => selectedMarket.value === market.name)) {
        productOptions = productOptions.concat(market.products.map(product => ({
          value: product.name,
          label: `${product.name} (${market.name})`, // Include market name for clarity
          region: product.region // Include region data for possible future use
        })));
      }
    });
  }

  // Handling market selection changes
  const handleMarketsChange = (selectedOptions) => {
    onMarketsChange(selectedOptions);
    onProductsChange([]); // Reset products selection when market changes
  };

  // Handling product selection changes
  const handleProductsChange = (selectedOptions) => {
    onProductsChange(selectedOptions);
  };

  return (
    <div>
      <h2>Options</h2>
      <div>
        <h3>Markets</h3>
        <Select
          isMulti
          options={marketOptions}
          onChange={handleMarketsChange}
          value={selectedMarkets}
          placeholder="Select Markets..."
        />
      </div>
      <div>
        <h3>Products</h3>
        <Select
          isMulti
          options={productOptions}
          onChange={handleProductsChange}
          value={selectedProducts}
          placeholder="Select Products..."
          isDisabled={!selectedMarkets || selectedMarkets.length === 0}
        />
      </div>
    </div>
  );
};

export default Sidebar;

