import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function UserHome() {
  const cid = sessionStorage.getItem('id')
  const [userinfo, setuserinfo] = useState()
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/users/' + cid)
      .then((resp) => {
        console.log('User Info', resp.data)
        setuserinfo(resp.data)
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
          <div className='col-sm-6 p-3'>
            <div className='card shadow'>
              <div className='card-header'>
                <h5>User Profile</h5>
              </div>
              <div className='card-body'>
                <table className='table table-borderless'>
                  <tbody>
                    <tr>
                      <th>User Name</th>
                      <th>{userinfo?.uname}</th>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <th>{userinfo?.address}</th>
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <th>{userinfo?.gender}</th>
                    </tr>
                    <tr>
                      <th>Email Address</th>
                      <th>{userinfo?.userid}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserHome
