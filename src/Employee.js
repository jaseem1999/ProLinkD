import React from 'react'
import './Employee.css'

function Employee(props) {
    return (
        <div>
            <table border='2' id="table-em" align='center' cellspacing=''>
                <tr className="table-raw">
                    <th>project Name</th>
                    <th>project link</th>
                    <th>project Image</th>
                </tr>
                <tr className="table-raw">
                    <td id="table-data"> <span> {props.project} <br/> 
                    <ul className="li" align="left"> 
                        <li>{props.projectd}</li> 
                    </ul></span>
                    </td>
                    <td id="table-data"> {props.projectDetails} </td>
                    <td className=""> {props.img} </td>
                </tr>
                
                    
                
            </table>
        </div>
    )
}

export default Employee
