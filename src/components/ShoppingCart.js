import React from 'react';
import MerchControl from './MerchControl';
import PropTypes from 'prop-types';

function ShoppingCartComponent(props) {
  return (
    <React.Fragment>
      {props.shoppingCart.map((merch, index) =>
        <Merch name={merch.name}
        price={merch.price}
        size={merch.size}
        description={merch.description}
        key={index}/>
      )}
    </React.Fragment>
  );
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array
};

export default ShoppingCart;