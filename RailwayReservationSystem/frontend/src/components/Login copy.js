import axios from 'axios';
import React, { useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import "./login.scss";
import Error from './Error';
import TrainList from './TrainList'
import AdminService from '../Services/AdminService';



function Login() {
  let history = useHistory();


  const[data,setData]=useState({
    username:"",
    password:""
})

function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
 
}
  

  const signin = (username,password)=>{
    if(!username || !password)
    {
      alert('Please fill all required fields')
      return
    }
    console.log(username +" and " + password );
     (axios.post("http://localhost:8086/users/auth",{username,password}
    ).then(res=>{
      console.log(res.data);
      console.log(res.status.type);
      console.log(res.data.jwt);
      // setToken(res.data)
      localStorage.setItem("token", res.data.jwt);
      if(res.data !== "wrong username and password" ){
        toast.success("Logged in successfully" , {position:"top-center"})
        history.push("/booking")
        
      }else{
        toast.error("you are not logged in" , {position:"top-center"})
        history.push("/notAuthenticate")
        
      }
      
      

    }).catch(err=>{
      console.log(err);
      // return <Redirect to="/"></Redirect>
    }));


   
  }






  return (

    <section className='showcase login'>
         <div className="container" >
          <div className='showcase-overlay'>
            <h1 className="booking">USER LOGIN</h1>
            <hr></hr>
            <div className="inner">
              <label><b>User Name</b></label>
              <br></br>
              <input type="text" placeholder='username' value={data.username} id='username' onChange={handle} />
              <br></br><br></br>
              <label><b>Password</b></label>
              <br></br>
              <input type="text" placeholder='password' value={data.password} id='password' onChange={handle} />
              <br></br><br></br>
              <button
                className="btn btn-success"
                type="submit"
                onClick={() => { signin(data.username,data.password)}}
              >
          LogIn
              </button>
              <button
                className="btn btn-success"
                onClick={() => { history.push("/userRegister")}}
              >
          Register
              </button>
            </div>
          </div></div>
        
        </section>
      )}
  

  

export default Login