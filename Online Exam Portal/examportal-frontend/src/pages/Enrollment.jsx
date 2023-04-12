import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Enrollment() {
  const userid = sessionStorage.getItem('id')
  const [tests, settests] = useState([])
  const handleEnroll = (id) => {
    axios
      .post('http://localhost:8080/api/exams', { userid: userid, testid: id })
      .then((resp) => {
        toast.success(resp.data)
      })
      .catch((err) => {
        toast.error(err.response.data)
      })
  }
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/tests/')
      .then((resp) => {
        console.log('User Info', resp.data)
        settests(resp.data)
      })
      .catch((err) => {
        console.log(err)
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
            <div className='card shadow'>
              <div className='card-header'>
                <h5>Available Tests</h5>
              </div>
              <div className='card-body row'>
                {tests.map((x) => (
                  <div className='col-sm-4' key={x?.id}>
                    <div
                      className='card'
                      onClick={(e) => handleEnroll(x?.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className='card-body bg-primary text-right text-white'>
                        <h5>{x?.testName}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Enrollment
