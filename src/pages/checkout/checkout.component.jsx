import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { cartItemsTotal, selectCartItems } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss'
import CheckoutItems from '../../components/checkout-items/CheckoutItems.component';

const Checkout = ({items,total}) => {
  return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {items.map(item=> <CheckoutItems key={item.id} cartItem = {item}/>)}

        <div className='total'>
            Total : {total}
        </div>
    </div>
    );
};

const mapStateToProps = createStructuredSelector({
    items : selectCartItems,
    total : cartItemsTotal
})
export default connect(mapStateToProps)(Checkout)
