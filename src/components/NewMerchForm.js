import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Inventory from './Inventory';

const mainInventoryList = [
  {
    name: 'Blue Shirt',
    price: 6,
    size: 'xs',
    description: 'You can wear it!'
  }
];

function NewMerchForm(props) {

  function handleNewMerchFormSubmission(props) {
    props.onNewMerchCreation({
      size: props.size.value,
      prices: props.price.value,
      description: props.description.value,
      name: props.name.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onClick={handleNewMerchFormSubmission}>
        <div>
          <input
            type='radio' 
            name='size'
            placeholder='Merch Size' />
        </div>
      </form>
      {mainInventoryList.map((item, index) =>
        <Merch name={item.name}
        price={item.price}
        size={item.size}
        description={item.description}/>
        <button onclick={handleNewMerchFormSubmission(item)}></button>
      )}
    </React.Fragment>
  );
}