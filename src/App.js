import './App.css';
import HomePage from './pages/homepage/HomePage.Component';
import { Routes,Route, Link,Navigate } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component'; 
import SignIn_signUp from './pages/signIn_signUp/signIn_signUp.component';
import SignIn from './components/signIn/SignIn.component';
import React from 'react';
import { auth, createUserProfile } from './firebase/firebase.utils';
import {connect} from 'react-redux'
import setCurrentUser from './redux/user/user-actions'
// import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ShoppingIcon from './components/cart-icon/cart-icon.component'
import Contact from './pages/contact/contact.component';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from './redux/user/user.selectors';
import Checkout from './pages/checkout/checkout.component';


  class App extends React.Component {
  

    unSubscribe = null
    // componentDidMount(){
    //   this.unSubscribe = auth.onAuthStateChanged( user => {
    //     this.setState({
    //       currentUser : user
    //     })
    //     console.log(user)
    //   })
    // }
  
    componentDidMount(){
      this.unSubscribe = auth.onAuthStateChanged(async userAuth => {
  
        if(userAuth){
  
          const userRef = await createUserProfile(userAuth)
  
          userRef.onSnapshot(snapshot => {
            this.props.setCurrentUser({
              currentUser : {
                id: snapshot.id,
                ...snapshot.data()
              }
            },)
            // ()=>console.log(this.state))
          })
          
        }
        this.props.setCurrentUser(userAuth)
        
      })
      // console.log(this.state)
    }
  
    componentWillUnmount(){
      this.unSubscribe()
    }
    
    render(){
      console.log('checking in App js render',this.props.currentUser);
     
      return (
        
        <div>
          <Header/>
          <Routes>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/" element={<HomePage/>}/>
            {/* <Route  path="/signIn_signUp" render={()=>{this.props.currentUser ? <Navigate from="/signIn_signUp" to="/" /> : <SignIn_signUp/>}}/> */}
            <Route  path="/signIn_signUp" element={<SignIn_signUp/>}/>
         
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
         
        </div>
      );
    }
  }
  
  const mapStateToProps = createStructuredSelector({
    currentUser : currentUserSelector
  })
  
  const mapDispatchToProps = dispatch =>({
    setCurrentUser : (user) => dispatch(setCurrentUser(user))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(App)
  
  