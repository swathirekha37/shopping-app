import React, { Component } from 'react';
import { auth, createUserProfile } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import './signUp.styles.scss'

export class SignUp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         displayName : '',
         email:'',
         password:'',
         confirmPassword:''
      }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit =async e => {
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("passwords don't match")
        }

        try{
            const {user} =  await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfile(user,{displayName})
            this.setState({
                displayName : '',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.log('error in creating doc',error.message)
        }
    }
    
  render() {
    const {displayName,email,password,confirmPassword} = this.state
    
    return <div className='sign-up'>
        <h2 className='title'>Sign up with email and password</h2>
        <form onSubmit={this.handleSubmit}>
           
            <FormInput name="displayName" type="text" value={displayName} handleChange={this.handleChange}  lable="displayName"/>
            <FormInput name="email" type="text" value={email} handleChange={this.handleChange}  lable="email"/>
            <FormInput name="password" type="password" value={password} handleChange={this.handleChange}  lable="password"/>
            <FormInput name="confirmPassword" type="password" value={confirmPassword} handleChange={this.handleChange}  lable="confirmPassword"/>
            <CustomButton type="submit">Sign Up</CustomButton>
        </form>
    </div>;
  }
}

export default SignUp;
