import React from 'react'

export default function SignupFolder() {
  return (
    <div className='custom-Form'>
         
         <form >
            <h2 className='text-center mb-4'>Sign Up</h2>
             <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control "  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
             </div>
             {/*                                 Phone Number                                     */}
             <div className="mb-3">
                <label htmlFor="Phoneinputfield" className="form-label">Phone Number</label>
                <input type="Number" className="form-control "  id="Phoneinputfield" aria-describedby="Phone"/>
                <div id="Phone" className="form-text">We'll never share your Phone Number with anyone else.</div>
             </div>
            {/*                                 Phone Number                                     */}
               <div className="mb-3">
                <label htmlFor="Password" className="form-label">Enter your Password</label>
                <input type="password" className="form-control "  id="Password" aria-describedby="password"/>
                <div id="password" className="form-text">Use UpperCase/digits/specialChar.</div>
             </div>
         </form>

    </div>
  )
}

