import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './userRegister.scss'

function AdminRegister() {
  const history = useHistory();
  const [fullname , setFullName] = useState('')
  const [email , setEmail] = useState('')
  const [contact , setContact] = useState('')
  const [age , setAge] = useState('')
//   const [secret , setSecret] = useState('')

  const register = (e)=>{
    console.log("clicked");
    e.preventDefault();
    if(!fullname || !email || !contact || !age){
      alert('Please provide all required information')
      return;
    }

    const UserDetails = {full_name:fullname ,email_address: email ,contact_no: contact , age,secret_key:'secret' }
    console.log(UserDetails);
    axios.post('http://localhost:8086/users/createUser',UserDetails)
    .then(resp=>{
      console.log("Admin => ",resp.data)
      alert(resp.data)
      history.push("/userlogin")
    })
    .catch(err=>{
      alert("Error "+err.error)
    })
  }

  return (
    <div className='section'>

<form>
    <div class="form-group heading">USER REGISTER</div>
  <div class="form-group">
    <label for="exampleInputFullName">Full Name</label>
    <input type="text" class="form-control" id="exampleInputFullName" placeholder="Enter Full Name"  onChange={(e) => setFullName(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputContact">Contact No</label>
    <input type="text" class="form-control" maxLength={10} id="exampleInputContact" placeholder="Enter Contact No" onChange={(e)=> setContact(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="exampleAge">Enter Your Age</label>
    <input type="text" class="form-control" id="exampleAge" placeholder="Enter Your Age" onChange={(e)=> setAge(e.target.value)}/>
  </div>
  <div class='form-group btn-box'>
  <button type="submit" class="btn btn-primary"
  onClick={(e)=>register(e)}
  >Submit</button>
  </div>
</form>
    </div>
  )
}

export default AdminRegister