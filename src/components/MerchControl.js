import React from 'react';
import NewMerchForm from './NewMerchForm';
import ShoppingCart from './ShoppingCart';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainShoppingCart : []
    };
  }

  handleAddingMerchToCart = (newMerch) => {
    const newMainShoppingCart = this.state.mainShoppingCart.concat(newMerch);
    this.setState({mainShoppingCart: newMainShoppingCart});
  }

  render(){
    return (
      <React.Fragment>
        <newMerchForm onNewMerchCreation={this.handleAddingMerchToCart} />
        <ShoppingCart shoppingCart={this.state.mainShoppingCart} />
      </React.Fragment>
    )
  }
}