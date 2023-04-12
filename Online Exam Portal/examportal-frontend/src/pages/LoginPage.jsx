import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import loginvalidation from '../loginvalidation'

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errmsg, setErrmsg] = useState(null)

  const [user, setUser] = useState()
  const [errors, setErrors] = useState({})

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(loginvalidation(user))
    if (Object.keys(errors).length === 0) {
      console.log(user)
      axios
        .post('http://localhost:8080/api/users/validate', {
          userid: user.userid,
          password: user.pwd,
        })
        .then((resp) => {
          let result = resp.data
          console.log(resp.data)
          sessionStorage.setItem('userid', result.userid)
          sessionStorage.setItem('uname', result.uname)
          sessionStorage.setItem('role', result.admin ? 'Admin' : 'User')
          sessionStorage.setItem('id', result.id)
          dispatch({ type: 'IsLoggedIn' })
          toast.success('Login successfull')
          if (result.admin) navigate('/dashboard')
          else navigate('/profile')
        })
        .catch((error) => {
          console.log('Error', error)
          toast.error('Invalid username or password')
        })
    }
  }

  return (
    <div className='login'>
      <div className='jumbotron p-4 text-white text-center border-bottom mb-0 bg-dark'>
        <h4>Welcome to Online Exam Portal</h4>
      </div>
      <div className='container pt-4'>
        <div className='row'>
          <div className='col-sm-5 mx-auto'>
            <form className='card shadow mt-5' onSubmit={handleSubmit}>
              <div className='card-header'>
                <h5 className='text-center'>Login Page</h5>
              </div>
              <div className='card-body'>
                <div className='form-group form-row'>
                  <label className='col-sm-4 col-form-label'>User Id</label>
                  <div className='col-sm-8'>
                    <input
                      type='text'
                      name='userid'
                      required
                      className='form-control'
                      placeholder='User Id'
                      value={user?.userid}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className='form-group form-row'>
                  <label className='col-sm-4 col-form-label'>Password</label>
                  <div className='col-sm-8'>
                    <input
                      type='password'
                      required
                      className='form-control'
                      name='pwd'
                      placeholder='Password'
                      value={user?.pwd}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <button className='btn btn-primary float-right'>Login</button>
                <Link to='register'>Not registered Click here</Link>
              </div>
              {errmsg != null ? (
                <div className='alert text-danger text-center font-weight-bold'>
                  {errmsg}
                </div>
              ) : (
                ''
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
