import React from "react";
import { useState, useEffect } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let localUsers = JSON.parse(localStorage.getItem("users"));
        setUsers(localUsers);
    })
    return <div><h1>User List Component - Functional Component</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}