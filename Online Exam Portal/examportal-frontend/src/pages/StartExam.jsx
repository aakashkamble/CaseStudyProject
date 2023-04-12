import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const StartExam = () => {
  const { examid } = useParams()
  const navigate = useNavigate()
  const minutes = 1
  const [data, setdata] = useState()
  const [questions, setQuestions] = useState([])
  const Ref = useRef(null)
  // The state for our timer
  const [timer, setTimer] = useState('00:00:00')

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24)
    return {
      total,
      hours,
      minutes,
      seconds,
    }
  }
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e)
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      )
      console.log('id', total, seconds)
    } else {
      clearInterval(Ref.current)
      submitExam()
    }
  }

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer('00:00:00')

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current)
    const id = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = id
  }
  const getDeadTime = () => {
    let deadline = new Date()

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + minutes * 60)
    return deadline
  }
  const handleComplete = (e) => {
    submitExam()
    toast.success('completed')
  }
  const handleSubmit = (e) => {
    submitExam()
  }
  const submitExam = () => {
    axios
      .post('http://localhost:8080/api/exams/submit', {
        examid: examid,
      })
      .then((resp) => {
        toast.success(resp.data)
      })
      .catch((err) => {
        toast.error(err.response.data)
      })
    navigate('/result/' + examid)
  }
  const saveAnswer = (ans, qid) => {
    axios
      .post('http://localhost:8080/api/exams/answers', {
        qid: qid,
        answer: ans,
      })
      .then((resp) => {
        toast.success(resp.data)
        loadData()
      })
      .catch((err) => {
        toast.error(err.response.data)
      })
  }
  const loadData = () => {
    axios.get('http://localhost:8080/api/exams/' + examid).then((resp) => {
      setdata(resp.data)
    })
    axios
      .get('http://localhost:8080/api/exams/questions/' + examid)
      .then((resp) => {
        setQuestions(resp.data)
      })
  }
  useEffect(() => {
    loadData()
    clearTimer(getDeadTime())
  }, [])
  return (
    <>
      <div
        className='card position-fixed'
        style={{ width: '100px', right: '0' }}
      >
        <div className='card-body p-2 text-center'>
          <h5>{timer}</h5>
        </div>
      </div>

      <div className='container'>
        <h5 className='text-center p-2'>Exam Started</h5>
        <h6>Exam : {data?.test?.testName}</h6>
        {questions.map((x) => (
          <div className='card my-2' key={x.id}>
            <div className='card-body'>
              <h6>
                {x.qno}) {x.question.description}
              </h6>
              <ol>
                <li>{x.question.option1}</li>
                <li>{x.question.option2}</li>
                <li>{x.question.option3}</li>
                <li>{x.question.option4}</li>
              </ol>
              <select
                value={x.userans}
                onChange={(e) => saveAnswer(e.target.value, x.id)}
                className='form-control form-control-sm'
                style={{ width: '200px' }}
              >
                <option value=''>Select Answer</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
        ))}
        <button onClick={handleSubmit} className='btn btn-success'>
          Submit Exam
        </button>
      </div>
    </>
  )
}

export default StartExam
