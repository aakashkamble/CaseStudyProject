import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Dashboard() {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:8080/api/users/dashboard').then((resp) => {
      setData(resp.data)
    })
  }, [])
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='col-sm-2 bg-transparent p-0 border-right border-primary'
            style={{ height: 'calc(100vh - 80px)' }}
          >
            <SideBar />
          </div>
          <div className='col-sm-10'>
            <h4 className='text-left p-2 border-bottom border-success'>
              Admin Dashboard
            </h4>
            <div className='row'>
              <div className='col-sm-3'>
                <div
                  className='card shadow bg-primary text-white text-right'
                  onClick={(e) => navigate('/users')}
                >
                  <div className='card-body'>
                    <h4>Users</h4>
                    <h5>{data.users}</h5>
                  </div>
                </div>
              </div>

              <div className='col-sm-3'>
                <div
                  className='card shadow bg-success text-white text-right'
                  onClick={(e) => navigate('/tests')}
                >
                  <div className='card-body'>
                    <h4>Tests</h4>
                    <h5>{data.tests}</h5>
                  </div>
                </div>
              </div>

              <div className='col-sm-3'>
                <div
                  className='card shadow bg-danger text-white text-right'
                  onClick={(e) => navigate('/exams')}
                >
                  <div className='card-body'>
                    <h4>Exams</h4>
                    <h5>{data.exams}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
