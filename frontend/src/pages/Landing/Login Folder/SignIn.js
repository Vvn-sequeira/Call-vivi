import React, {useState} from 'react'
import "./Login.css";
import  Navbar from "../../Navbar";
import LoginForm from './LoginForm';
import LoginImg from './LoginImg';
import LoginOption from './LoginOption';
export default function SignIn() {



  return (

    <div className='body'>
        <Navbar></Navbar>

          <div className='row both-img-and-form-holder'>
                <div className='col-lg-6 col-md-12 col-sm-12  loginIMG-display-none '>
                    <LoginImg></LoginImg>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 center-Loginform'>
                    <LoginForm></LoginForm>
                    <p className='text-white text-  divider opacity-49 '>-----------------------------Or SignIn with ---------------------------------</p>
                    <LoginOption></LoginOption>
                </div>
          </div>
    </div>
  )
}
