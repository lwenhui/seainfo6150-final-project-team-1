import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = ({ options, selectedOptions, product }) => {
  if (!product) {
    return null;
  }

  let price = product.sale || product.price;

  const premiumOptionsIds = new Set(Object.values(options).filter(option => option.premium).map(option => option.id));

  const selectedOptionsIds = new Set (Object.keys(selectedOptions));

  const selectedPremiumOptionsIds = new Set(
    [...premiumOptionsIds].filter(x => selectedOptionsIds.has(x)))

  return (
    <div>
      {
        [...selectedPremiumOptionsIds].map(id =>
          <div><span>{options[id].name}</span> add 50</div>
        )
      }
      <div><span>Total:</span> { price + [...selectedPremiumOptionsIds].length*50 }</div>
    </div>
  );
};

TotalPrice.propTypes = {
  options: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  product: PropTypes.object
};

export default TotalPrice;
