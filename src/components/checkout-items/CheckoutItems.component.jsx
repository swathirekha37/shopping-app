import React from 'react';
import { removeItemFromCart } from '../../redux/cart/cart-actions';
import './CheckoutItems.styles.scss'
import { connect } from 'react-redux';

const CheckoutItems = ({cartItem,removeItemFromCart}) => {
   const {name,imageUrl,quantity,price} = cartItem
  return (
        <div className='checkout-item'>    
            <div className='image-container'>
                <img src={imageUrl} alt='image'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
            
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
   return { removeItemFromCart : (item) => dispatch(removeItemFromCart(item)) }
}

export default connect(null,mapDispatchToProps)(CheckoutItems)
