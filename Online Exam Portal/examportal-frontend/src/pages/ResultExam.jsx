import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const ResultExam = () => {
  const { examid } = useParams()
  const [data, setdata] = useState()
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/exams/questions/' + examid)
      .then((resp) => {
        setQuestions(resp.data)
      })
    axios.get('http://localhost:8080/api/exams/' + examid).then((resp) => {
      setdata(resp.data)
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
            <h4 className='text-center'>Exam Result</h4>
            <div className='row'>
              <div className='col-sm-6 mx-auto'>
                <table className='table table-bordered table-sm'>
                  <thead>
                    <tr>
                      <th>QNo</th>
                      <th>User Answer</th>
                      <th>Result</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((x) => (
                      <tr>
                        <td>{x.qno}</td>
                        <td>{x.userans}</td>
                        <td>
                          {x.userans == x.question.answer ? (
                            <h5 className='text-success'>Correct</h5>
                          ) : (
                            <h5 className='text-danger'>Wrong</h5>
                          )}
                        </td>
                        <td>
                          {x.userans == x.question.answer
                            ? x.question.marks
                            : 0}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={3}>Final Score</th>
                      <th>{data?.testScore}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultExam
