import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'


  /**To Show Add Toastify Text */

 

export default function Register() {



  
    const location = useLocation();
    const history = useHistory();
    const fromUrl = _get(location, "state.from.pathname");
    const Register = () => {
        if (fromUrl) {
          history.push(fromUrl);
        } else {
          history.push("/userlogin");
        }
    };

  return (
      <div className="cc">
            
    <div className="nn">
  
        <form >
      <div className="oo"> 
      <h1 className="ZZ">USER REGISTER</h1>
      <br></br>
        <label for="USERNAME" >UserName</label>
          <input
           type="username"
           name="username"
           placeholder="Username" />
           <br></br>
           <br></br>
           </div>  
           
           <div className="tt"> 
            <label for="PASSWORD" >Password</label>
         <input    type="password"
            name="password"
            placeholder="Password"
           
 />
 </div>  
 <div className="qq">
 <br></br>
 <Link to="/userlogin" className="btn btn-success"> Register </Link>

 </div>
        </form>
      </div>
      </div>
    );
  }

    
  
