import axios from 'axios'
import { parse } from 'date-fns'
import { format } from 'date-fns/esm'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Questions() {
  const [Questions, setQuestions] = useState([])
  const { testid } = useParams()
  const [selectedFile, setSelectedFile] = useState()
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0])
  }
  const loadData = () => {
    axios
      .get('http://localhost:8080/api/tests/questions/' + testid)
      .then((resp) => {
        setQuestions(resp.data)
        console.log(Questions)
      })
  }

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:8080/api/tests/questions/' + id)
      .then((resp) => {
        toast.success(resp.data)
        loadData()
      })
      .catch((err) => {
        toast.error('Error occurred')
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('testid', testid)
    formData.append('file', selectedFile)
    axios
      .post('http://localhost:8080/api/tests/questions', formData)
      .then((resp) => {
        toast.success(resp.data)
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
                  All Questions
                </h4>
                <table className='table table-bordered table-light table-sm table-hover'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Question</th>
                      <th>Options</th>
                      <th>Answer</th>
                      <th>Marks</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Questions.map((x) => (
                      <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.description}</td>
                        <td>
                          <ol type='1'>
                            <li>{x.option1}</li>
                            <li>{x.option2}</li>
                            <li>{x.option3}</li>
                            <li>{x.option4}</li>
                          </ol>
                        </td>
                        <td>{x.answer}</td>
                        <td>{x.marks}</td>
                        <td>
                          <button
                            onClick={(e) => handleDelete(x.id)}
                            className='btn btn-danger btn-sm mr-2'
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='col-sm-4'>
                <h4 className='text-left p-2 border-bottom border-success'>
                  Upload Questions
                </h4>
                <div className='form-group'>
                  <label>Select File</label>
                  <input
                    type='file'
                    accept='.csv'
                    className='form-control-file form-control-sm'
                    onChange={handleFileInput}
                  />
                  <small>
                    Column Format(question,ch1,ch2,ch3,ch4,ans,marks)
                  </small>
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

export default Questions
