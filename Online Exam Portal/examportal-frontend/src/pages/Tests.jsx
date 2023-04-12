import axios from 'axios'
import { parse } from 'date-fns'
import { format } from 'date-fns/esm'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Tests() {
  const [tests, setTests] = useState([])
  const [testname, settestname] = useState()
  const loadData = () => {
    axios.get('http://localhost:8080/api/tests').then((resp) => {
      setTests(resp.data)
      console.log(tests)
    })
  }

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:8080/api/tests/' + id)
      .then((resp) => {
        toast.success(resp.data)
        loadData()
      })
      .catch((err) => {
        toast.error(err.response.data)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:8080/api/tests', { testName: testname })
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
              <div className='col-sm-8'>
                <h4 className='text-left p-2 border-bottom border-success'>
                  All Tests
                </h4>
                <table className='table table-bordered table-light table-sm table-hover'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Created On</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tests.map((x) => (
                      <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.testName}</td>
                        <td>
                          {format(
                            parse(x.createdOn, 'yyyy-MM-dd', new Date()),
                            'dd-MMM-yyyy'
                          )}
                        </td>
                        <td>
                          <button
                            onClick={(e) => handleDelete(x.id)}
                            className='btn btn-danger btn-sm mr-2'
                          >
                            Delete
                          </button>
                          <Link
                            to={'/questions/' + x.id}
                            className='btn btn-primary btn-sm'
                          >
                            Questions
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='col-sm-4'>
                <h4 className='text-left p-2 border-bottom border-success'>
                  Add Test
                </h4>
                <div className='form-group'>
                  <label>Test Name</label>
                  <input
                    type='text'
                    value={testname}
                    className='form-control form-control-sm'
                    onChange={(e) => settestname(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className='btn btn-primary float-right'
                >
                  Save Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tests
