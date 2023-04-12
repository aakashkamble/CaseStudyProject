import React, { useEffect, useState } from 'react'
import './paymentHistory.scss'
import { Link } from 'react-router-dom'
import BookService from '../Services/BookService'

function UserHistory() {

     const [detail , setDetail] = useState([])

     useEffect(()=>{
          getAllUserDetails();
     } , [])

     const getAllUserDetails = ()=>{
          BookService.UserTrain().then((response) =>{
               setDetail(response.data)
               console.log(response.data);
          }).catch(error =>{
               console.error(error);
          })

     }


  return (<div style={{
    backgroundColor: 'AntiqueWhite'}}>
    <div className="container">
     <br></br><br></br>
            <h2 className="text-center">User Details</h2>
            <Link to="/adminTrainList" className="btn btn-success" >Back</Link>
            <Link to="/adminTrainList" className="btn btn-success" >Train List</Link>
            <Link to="/login" className="btn btn-success" >Logout</Link>
            <br></br><br></br>
            <table className="table table-bordered table-striped" style={{
        backgroundColor: 'LightCyan'}}>
                <thead>
                    <th>id </th>
                   
                    <th>Name</th>
                    <th>Age</th><th>email</th>

                    <th>Contact</th>
                    
   
                    
                   
                </thead>
                <tbody>
                    {
                         detail.map(
                              payDetail => 
                                   <tr key={payDetail.Id}>
                                       <td>{payDetail.Id}</td>
                                                              
                                        <td>{payDetail.name}</td>
                                        <td>{payDetail.age}</td>
                                        <td>{payDetail.emailId}</td>
                                        <td>{payDetail.contact}</td>
                                        


                                   </tr>
                         )

                    }

                </tbody>
          </table>
    
    </div></div>
  )
}

export default UserHistory