import React, { Component, createContext } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import SignIn_signUp from '../../pages/signIn_signUp/signIn_signUp.component';
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import './SignIn.styles.scss'
import {Redirect} from 'react-router'
import { Navigate } from 'react-router-dom';
import currentUser from '../../App'
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import userContext from '../../App'

const SignIn =({value}) =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

   
    // componentDidMount(){
    //     console.log("SignIn component before update",this.props.currentUser)
    //     // this.props.currentUser ? (<Navigate to="/"/>) : (<Navigate to="/signIn_signUp"/>)  
    // }
    // componentDidUpdate(){
    //     console.log("SignIn component after update",this.props.currentUser);
    // }
    
    const handleSubmit = async event =>{
        
        event.preventDefault()

        try{
            await auth.signInWithEmailAndPassword(email,password)
            setEmail('')
            setPassword('')
        }catch(error){
            console.log(error.message)
        }
    }
    
    return(

        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Login with your email and password</span>
            
            <form onSubmit={handleSubmit}>
                    
                <FormInput type="email" name="email" label="email" value={email} handleChange={(e)=>setEmail(e.target.value)} required/>
                <FormInput type="password" name="password" label="password" value={password} handleChange={(e)=>setPassword(e.target.value)} required/>
                   
                <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
  
}

export default SignIn
