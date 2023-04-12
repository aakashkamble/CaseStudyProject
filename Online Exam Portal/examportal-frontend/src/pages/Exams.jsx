import axios from 'axios'
import { parse } from 'date-fns'
import { format } from 'date-fns/esm'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Exams() {
  const [exams, setExams] = useState([])
  const [testname, settestname] = useState()
  const userid = sessionStorage.getItem('id')
  const role = sessionStorage.getItem('role')
  const loadData = () => {
    if (role === 'Admin') {
      axios.get('http://localhost:8080/api/exams').then((resp) => {
        setExams(resp.data)
      })
    } else {
      axios
        .get('http://localhost:8080/api/exams?userid=' + userid)
        .then((resp) => {
          setExams(resp.data)
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:8080/api/Exams', { testName: testname })
      .then((resp) => {
        toast.success(resp.data)
        settestname('')
        loadData()
      })
      .catch((err) => {
        toast.error('Error saving test')
      })
  }

  useEffect(() => {
    loadData()
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
            <div className='row'>
              <div className='col-sm-12'>
                <h4 className='text-left p-2 border-bottom border-success'>
                  All Exams
                </h4>
                <table className='table table-bordered table-light table-sm table-hover'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Test Name</th>
                      <th>Created On</th>
                      <th>Exam Date</th>
                      <th>Exam Score</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exams.map((x) => (
                      <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x?.test.testName}</td>
                        <td>
                          {format(
                            parse(x?.test?.createdOn, 'yyyy-MM-dd', new Date()),
                            'dd-MMM-yyyy'
                          )}
                        </td>
                        <td>{x?.testDate}</td>
                        <td>{x?.testScore}</td>
                        <td>{x?.status}</td>
                        <td>
                          {x?.status != 'Completed' ? (
                            <Link
                              to={'/start/' + x.id}
                              className='btn btn-primary btn-sm mr-2'
                            >
                              Start Test
                            </Link>
                          ) : (
                            <Link
                              to={'/result/' + x.id}
                              className='btn btn-info btn-sm'
                            >
                              Result
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
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

export default Exams
