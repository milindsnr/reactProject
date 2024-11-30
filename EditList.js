import React from "react";
import { useState, useEffect } from "react";

export default function EditList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let localUsers = JSON.parse(localStorage.getItem("users"));
        setUsers(localUsers);
    });
    
    return <div><h1>Edit List</h1>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, index) => (
                    <tr key={index}>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
        
    
}