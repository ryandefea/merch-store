import React from 'react';
import PropTypes from 'prop-types';

function Inventory(props){
  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <h2>{props.size}</h2>
      <h2>{props.description}</h2>
      
    </React.Fragment>
  );
}


Inventory.propTypes = {
  size: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  name: PropTypes.string
};

export default Inventory;