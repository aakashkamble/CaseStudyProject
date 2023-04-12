import React, { useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import BookService from '../Services/BookService'
import { Link } from 'react-router-dom'

const BookingForm = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [gender, setgender] = useState('')
  const [adult, setadult] = useState('')
  const [children, setchildren] = useState('')
  const [age, setage] = useState('')
  const [trainNo, settrainNo] = useState('')
  const [startPoint, setstartPoint] = useState('')
  const [endPoint, setendPoint] = useState('')
  const [classType, setclassType] = useState('')
  const [payment, setpayment] = useState('')
  const [id, setid] = useState('')
  const [pnrNo, setpnrNo] = useState('')
  const history = useHistory();
  const [formErrors , setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);
  const UserDetails = { name,email,gender,adult,children,age,trainNo, startPoint, endPoint,classType,id,pnrNo,payment }

  const bookedTrain = (e) => {
    e.preventDefault();
    setFormErrors(validate(UserDetails));
    console.log(UserDetails)
    setIsSubmit(true)

    
        BookService.bookTrain(UserDetails).then((response) => {
          var e=JSON.stringify(response.data);
            alert(e);
            console.log(response);
            history.push('/booking')
        }).catch(error => {
            console.log(error)
        })
        // setTimeout(()=>{
        //   console.log("i'm here")
          
        //   window.location.href = "http://localhost:9004/";                 //it will redirect to paytm port
    
        // },2000)
    }



const paytm = (e) => {setTimeout(()=>{
  console.log("i'm here")
  
  window.location.href = "http://localhost:9004/";                 //it will redirect to paytm port

},2000) }



useEffect( ()=>{
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formErrors);
  }
}, [formErrors]);

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = "Name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.gender) {
    errors.gender = "Gender is required";
  } 
  if(!values.trainNo){
    errors.trainNo = "Train No is required";
  }
  if(!values.startPoint){
    errors.startPoint = "Start Point is required";
  }
  if(!values.endPoint){
    errors.endPoint = "End Point is required";
  }

  return errors;
};


const handleSubmit = (e)=>{
  e.preventDefault();
  
  

}

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
          <br></br><br></br>
            <h2 className="text-center">Book Train</h2>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label className="form-label">Name</label>

                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setname(e.target.value)}>
                  </input>
                  <p style={{"color":"red"}}>{formErrors.name}</p>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>

                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}>
                  </input>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Gender</label>

                  <input
                    type="text"
                    placeholder="Enter Gender"
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}>
                  </input>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">No of Adults</label>

                  <input
                    type="text"
                    placeholder="Enter No of Adults"
                    name="adults"
                    className="form-control"
                    value={adult}
                    onChange={(e) => setadult(e.target.value)}>
                  </input>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">No of Childrens</label>

                  <input
                    type="text"
                    placeholder="Enter No of Childrens"
                    name="children"
                    className="form-control"
                    value={children}
                    onChange={(e) => setchildren(e.target.value)}>
                  </input>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Age</label>

                  <input
                    type="text"
                    placeholder="Enter Age"
                    name="age"
                    className="form-control"
                    value={age}
                    onChange={(e) => setage(e.target.value)}>
                  </input>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">TrainNo</label>

                  <input
                    type="text"
                    placeholder="Enter TrainNo"
                    name="trainNo"
                    className="form-control"
                    value={trainNo}
                    onChange={(e) => settrainNo(e.target.value)}>
                  </input>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">StartPoint</label>

                  <input
                    type="text"
                    placeholder="Enter StartPoint"
                    name="startPoint"
                    className="form-control"
                    value={startPoint}
                    onChange={(e) => setstartPoint(e.target.value)}>
                  </input>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">EndPoint</label>

                  <input
                    type="text"
                    placeholder="Enter EndPoint"
                    name="endPoint"
                    className="form-control"
                    value={endPoint}
                    onChange={(e) => setendPoint(e.target.value)}>
                  </input>

                </div>
                <div className="form-group mb-2">
                  <label className="form-label">ClassType</label>

                  <input
                    type="text"
                    placeholder="Enter ClassType"
                    name="classType"
                    className="form-control"
                    value={classType}
                    onChange={(e) => setclassType(e.target.value)}>
                  </input>

                </div>

                <Link className="btn btn-success" onClick={(e) => bookedTrain(e)}  >Submit </Link> 
                <Link className="btn btn-info" onClick={(e) => paytm(e)}  >paytm </Link>
                <Link className="btn btn-info" to='/payment'> Goto Payment </Link> 
               
              </form>
            
            </div>

          </div>

        </div>
      </div>
      <br></br>
    </div>
  )
}

export default BookingForm