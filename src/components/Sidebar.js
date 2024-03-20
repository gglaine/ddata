import React from 'react';
import Select from 'react-select';

const Sidebar = ({ markets, onMarketsChange, onProductsChange, selectedMarkets, selectedProducts }) => {
  // Create options for markets
  const marketOptions = markets.map(market => ({
    value: market.name,
    label: market.name
  }));

  // Helper function to get all products from all markets
  const getAllProductOptions = () => {
    return markets.reduce((acc, market) => [
      ...acc,
      ...market.products.map(product => ({
        value: product.name,
        label: `${product.name} (${market.name})`, // Include market name for clarity
        region: product.region // Include region data for possible future use
      }))
    ], []);
  };

  // Determine product options based on selected markets
  let productOptions = [];
  if (selectedMarkets && selectedMarkets.length > 0) {
    // Filter products based on selected markets
    markets.forEach(market => {
      if (selectedMarkets.find(selectedMarket => selectedMarket.value === market.name)) {
        productOptions = productOptions.concat(market.products.map(product => ({
          value: product.name,
          label: `${product.name} (${market.name})`,
          region: product.region
        })));
      }
    });
  } else {
    // If no market is selected, show all products from all markets
    productOptions = getAllProductOptions();
  }

  // Handling market selection changes
  const handleMarketsChange = (selectedOptions) => {
    onMarketsChange(selectedOptions);
    // Optionally reset products selection when market changes, or you might keep it as per your app's logic
    // onProductsChange([]);
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
          // Removed the disable condition to allow showing all products when no market is selected
        />
      </div>
    </div>
  );
};

export default Sidebar;
