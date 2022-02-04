import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem.componet';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {useNavigate, withRouter} from 'react-router-dom'
import { toggleCartActions } from '../../redux/cart/cart-actions';

const CartDropdown = ({cartItems,dispatch}) => {
  
  const navigate = useNavigate()
  return <div className='cart-dropdown'>
      <div className='cart-items'>
        { cartItems.length ? cartItems.map(ci => <CartItem key={ci.id} item={ci}/> ) : <span className='empty'>Your cart is empty</span>}
      </div>

      <CustomButton onClick={()=>
        { navigate('/checkout')
          dispatch(toggleCartActions())
        }
        }>GO TO CHECKOUT</CustomButton>      
  </div>;
};

const mapStateToProps = createStructuredSelector({
 
    cartItems : selectCartItems
  
})

export default connect(mapStateToProps)(CartDropdown);
