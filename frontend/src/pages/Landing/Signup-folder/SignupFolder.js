import axios from 'axios';
import React from 'react'
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom'
import "./Signup.css"
let apiURL = process.env.REACT_APP_API_URL;

export default function SignupFolder() {
      const { enqueueSnackbar } = useSnackbar();
 let [formData , setFormData] = React.useState({
    name : "",
    username : "",
    phone : "",
    password : ""
 })

 let onChangee = (e)=> {
    setFormData( (prev)=> ( {...prev , [e.target.name] : e.target.value}));
 }

 let onSubmitHandler = async(e)=> {
   e.preventDefault();
   console.log(formData)
     try{
           await axios.post(`${apiURL}/api/v1/user/register` , formData , {
           withCredentials: true ,
          })
          enqueueSnackbar('user Registered Successfully !!', { variant: 'success' });
          setTimeout( ()=> {
            window.location.href = "/Login"
         },1000)
     }catch(error){
          const errorMsg = error.response?.data?.message || 
         "Something went wrong , please try again later";
        enqueueSnackbar(errorMsg, { variant: 'warning' });
        return ;
     }
 }

  return (
    <div className='custom-Form'>
         
         <form onSubmit={onSubmitHandler} className='custom-form' >
            <h2 className='text-center mb-4'>Sign Up</h2>
             <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Enter your Full Name</label>
                <input required onChange={onChangee} name='name' value={formData.name} type="text" className="form-control "  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Use Capital letters </div>
             </div>
             <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input required onChange={onChangee} name='username' value={formData.username} type="text" className="form-control "  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Enter Unique username </div>
             </div>
             {/*                                 Phone Number                                     */}
             <div className="mb-3">
                <label htmlFor="Phoneinputfield" className="form-label">Phone Number</label>
                <input required onChange={onChangee} name='phone' value={formData.phone} type="Number" className="form-control "  id="Phoneinputfield" aria-describedby="Phone"/>
                <div id="Phone" className="form-text">We'll never share your Phone Number with anyone else.</div>
             </div>
            {/*                                 Phone Number                                     */}
               <div className="mb-3">
                <label htmlFor="Password" className="form-label">Enter your Password</label>
                <input required onChange={onChangee} name='password' value={formData.password} type="password" className="form-control "  id="Password" aria-describedby="password"/>
                <div id="password" className="form-text">Use UpperCase/digits/specialChar.</div>
             </div>
             <div className='mb-3'>
               <button className='btn btn-outline-primary text-black border-black w-100  ' type='submit'>
                  Submit Now
               </button>
               <Link  style={{color: "#000000ff" }} to={"/Login"}>already have an account ? - Login here ..  </Link>
             </div>
         </form>

    </div>
  )
}

