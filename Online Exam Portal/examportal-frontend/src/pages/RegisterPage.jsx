import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function RegisterPage() {
  const [user, setUser] = useState(null)

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    if (!user?.uname || !user?.password || !user?.userid || !user?.gender) {
      toast.error('Please provide full details')
      return
    }
    axios
      .post('http://localhost:8080/api/users', user)
      .then((resp) => {
        console.log(resp)
        setUser(null)
        e.target.reset()
        toast.success('User registered successfully')
      })
      .catch((error) => console.log('Error', error))
  }

  return (
    <>
      <div className='jumbotron p-4 text-white text-center border-bottom mb-0 bg-dark'>
        <h4>Welcome to Online Exam Portal</h4>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-8 mx-auto'>
            <div className='card shadow mx-auto mt-3'>
              <div className='card-body'>
                <h4 className='text-center p-2'>Registration Form</h4>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-sm-6 mx-auto'>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          User Name
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='text'
                            name='uname'
                            value={user?.uname}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Address
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='text'
                            name='address'
                            value={user?.address}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Gender
                        </label>
                        <div className='col-sm-8'>
                          <select
                            name='gender'
                            value={user?.gender}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          >
                            <option value=''>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Email Id
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='email'
                            name='userid'
                            value={user?.userid}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
                        </div>
                      </div>

                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Password
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='password'
                            name='password'
                            value={user?.password}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
                        </div>
                      </div>
                      <button className='btn btn-primary btn-sm float-right'>
                        Register Now
                      </button>
                      <Link to='/'>Already registered Login</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
