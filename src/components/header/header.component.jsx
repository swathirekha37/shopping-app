import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser,hidden}) => {
  
  return (
    <div className='header'>   
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>

        <div className='options'>
            <Link to="/shop" className='option'>SHOP</Link>
            <Link to="/contact" className='option'>CONTACT</Link>
            {
              currentUser ? 
                <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div> : 
                <Link to="/signIn_signUp" className='option'>SIGNIN</Link>
            }
            <CartIcon />
            
        </div>

        { hidden ? null : (<CartDropdown/>)}
    </div>
  )

 }

 const mapStateToProps = createStructuredSelector ({
  currentUser : currentUserSelector,
  hidden : selectCartHidden
})
  

export default connect(mapStateToProps)(Header)

