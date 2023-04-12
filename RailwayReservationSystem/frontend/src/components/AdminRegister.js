import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './adminRegister.scss'

function AdminRegister() {
  const history = useHistory();
  const [fullname , setFullName] = useState('')
  const [email , setEmail] = useState('')
  const [contact , setContact] = useState('')
  const [age , setAge] = useState('')
  const [secret , setSecret] = useState('')

  const register = (e)=>{
    console.log("clicked");
    e.preventDefault();
    if(!fullname || !email || !contact || !age || !secret){
      alert('Please provide all required fields')
      return;
    }
    const UserDetails = {full_name:fullname ,email_address: email ,contact_no: contact , age ,secret_key: secret}    
    console.log(UserDetails);
    axios.post('http://localhost:8081/admin/access/createAdmin',UserDetails)
    .then(resp=>{
      console.log("Admin => ",resp.data)
      alert(resp.data)
      history.push("/login")
    })
    .catch(err=>{
      alert("Error "+err.error)
    })
  }

  return (
    <div className='section'>

<form>
    <div class="form-group heading">ADMIN REGISTER</div>
  <div class="form-group">
    <label for="exampleInputFullName">Full Name</label>
    <input type="text" class="form-control" id="exampleInputFullName" aria-describedby="emailHelp" placeholder="Enter Full Name"  onChange={(e) => setFullName(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputContact">Contact No</label>
    <input type="text" class="form-control" maxLength={10} id="exampleInputContact" aria-describedby="emailHelp" placeholder="Enter Contact No" onChange={(e)=> setContact(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="exampleAge">Enter Your Age</label>
    <input type="text" class="form-control" id="exampleAge" placeholder="Enter Your Age" onChange={(e)=> setAge(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleSecret">Secret Code</label>
    <input type="text" class="form-control" id="exampleSecret" placeholder="Enter Your Secret-Code" onChange={(e)=> setSecret(e.target.value)}/>
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