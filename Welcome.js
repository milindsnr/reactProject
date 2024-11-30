import React from "react";
import { useNavigate } from "react-router-dom";


export default function Welcome() {
    const navigate = useNavigate();

    let addUser = () => {
        //alert("I am in addUser");
        navigate("/Register");
    }
    let login = () => {
        //alert("I am in addUser");
        navigate("/Login");
    }
    return (
        <div>
            <table width="100%" height="100" >
                <tr>
                    <td width="100%" align="center">
                        <h2>Welcome to Users Module</h2>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center">
                        <h1>Existing Users</h1>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center">
                        <button className="btn btn-primary" onClick={login}>Login</button>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center">
                        <h1>New Users</h1>
                    </td>
                </tr>
                <tr >
                    <td width="100%" align="center" border="1px" solid="black">
                        <button className="btn btn-primary" onClick={addUser}>Register</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
