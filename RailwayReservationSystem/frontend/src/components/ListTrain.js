import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminService from '../Services/AdminService'


const ListTrain = () => {
    const [Trains, setTrains] = useState([])
    
    useEffect(() => {
        getAllTrains();
    }, [])

    const getAllTrains = () => {
        AdminService.getAllTrains().then((response) => {
            setTrains(response.data)
            console.log(response.date);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteTrain = (trainNo) => {
        AdminService.deleteTrain(trainNo).then((response) => {
            alert("Your train has been Deleted");
            getAllTrains();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div style={{
            backgroundColor: 'beige'}}>
        <div className="container"  >
            <br></br><br></br>
            <h2 className="text-center">List Of Trains</h2>
            <br></br><br></br>
            <table className="table table-bordered table-striped" style={{
        backgroundColor: 'LightCyan'}}>
                <thead>
                    <th>Train No. </th>
                    <th>Origin </th>
                    <th>Destination </th>
                    <th>DeptTime </th>
                    <th>Duration </th>
                    <th>No. of Seats </th>
                    <th>Sleeper Class </th>
                    <th>Second Class </th>
                    <th>First Class </th>
                    <th>Train Date </th>
                   
                </thead>
                <tbody>
                    {
                        Trains.map(
                            TrainDetails =>
                                <tr key={TrainDetails.Id}>
                                    <td>{TrainDetails.trainNo} </td>
                                    <td>{TrainDetails.startPoint} </td>
                                    <td>{TrainDetails.endPoint}</td>
                                    <td>{TrainDetails.deptTime}</td>
                                    <td>{TrainDetails.duration}</td>
                                    <td>{TrainDetails.noOfSeats}</td>
                                    <td>{TrainDetails.sleeperClass}</td>
                                    <td>{TrainDetails.secondClass}</td>
                                    <td>{TrainDetails.firstClass}</td>
                                    <td>{TrainDetails.trainDate}</td>
                                    

                                </tr>
                        )
                    }
                </tbody>

            </table>

        </div></div>
    )
}

export default ListTrain