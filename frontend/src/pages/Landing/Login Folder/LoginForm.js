import React ,{useState} from 'react'
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom'
import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL;


export default function LoginForm() {
   const { enqueueSnackbar } = useSnackbar();

    let [formData , setFormData] = useState({
      username : "",
      password : ""
    });
  
    let onChangee = (e) => {
      setFormData( (prev) => ({...prev , [e.target.name] : e.target.value }) )
    }

    let submitHandler = async(e)=> {
      e.preventDefault(); 
      console.log(formData)
      try {
           let res =  await axios.post(`${apiURL}/api/v1/user/Login`,formData , {
               withCredentials : true
            })
          enqueueSnackbar('user Logged In !!', { variant: 'success' });
         setTimeout( ()=> {
            window.location.href = "/"
         },1000)
      }catch(error){
               const errorMsg = error.response?.data?.message || 
         "Something went wrong , please try again later";
        enqueueSnackbar(errorMsg, { variant: 'warning' });
      }
  
    }
  
  return (
    <div className='Loginformdiv'>
        <form onSubmit={submitHandler}>
            <h2 className='text-center mb-4'>Login</h2>
            <div className='mb-3'>
                <label  htmlFor='email' className='form-label'>Username</label>
                <input name='username'  value={formData.username} onChange={onChangee} type='text' className='form-control' id='email' aria-describedby='emailHelp'/>
                <div id='emailHelp' className='form-text'>Enter your Username here please .</div>
             </div>
            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input name='password' style={{color: "black"}} value={formData.password} onChange={onChangee} type='password' className='form-control' id='password' aria-describedby='passwordd'/>
                <div id='passwordd' className='form-text'>Forgot password ? contact Devloper .</div>
             </div>
             <div className='mb-3'>
                <button className='btn btn-outline-primary text-black border-black w-100  ' type='submit'>
                   Sign-In </button>
                   <Link className='text-black' to={"/signup"}>New user ? .. Please SignUp fast </Link>
             </div>
        </form>
    </div>
  )
}
