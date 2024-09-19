import React,{ useEffect, useState } from 'react'

function Login() {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")

  useEffect(() => {
    document.title='Login'
  },[])
  return (
    <div className="row">
        <div className="col-lg-5 col-md-7 mx-auto">
            <div className="card border-success shadow-lg my-2">
                <div className="card-header border-bottom border-success">
                    <h4 style={{ fontSize:'30px'}} className="text-success text-center">
                        login
                    </h4>
                </div>
                <div className="card-body border-bottom border-success">
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control mt-2' id='email' placeholder='enter your email' name='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="">Password</label>
                        <input type="text" className='form-control mt-2' id='password' placeholder='enter your password' name='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
