import React, { useEffect, useState } from 'react'
import './paymentHistory.scss'
import { Link } from 'react-router-dom'
import PaymentService from '../Services/PaymentService'

function PaymentHistory() {

     const [detail , setDetail] = useState([])

     useEffect(()=>{
          getAllPayments();
     })

     const getAllPayments = ()=>{
          PaymentService.getPay().then((response) =>{
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
            <h2 className="text-center">Payment History</h2>
            <Link to="/adminTrainList" className="btn btn-success" >Back</Link>
            <Link to="/adminTrainList" className="btn btn-success" >Train List</Link>
            <Link to="/login" className="btn btn-success" >Logout</Link>
            <br></br><br></br>
            <table className="table table-bordered table-striped" style={{
        backgroundColor: 'LightCyan'}}>
                <thead>
                    <th>PNR No </th>
                    <th>Card No </th>
                    <th>Bank Name </th>
                    <th>ClassType </th>
                </thead>
                <tbody>
                    {
                         detail.map(
                              payDetail => 
                                   <tr key={payDetail.Id}>
                                        <td>{payDetail.pnrNo}</td>
                                        <td>{payDetail.cardNo}</td>
                                        <td>{payDetail.bankName}</td>
                                        <td>{payDetail.classType}</td>


                                   </tr>
                         )

                    }

                </tbody>
          </table>
    
    </div></div>
  )
}

export default PaymentHistory