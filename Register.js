import { render } from "@testing-library/react";
import React from "react";
import { Navigate } from "react-router-dom";


export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            fullName: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            confirmPassword: event.target[3].value

        }
        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; // ternary operator
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))

        this.setState({
            redirect: true
        })

    }

    render() {
        const { redirect } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    {
                        redirect && (
                            <Navigate to="/RegisterSuccessfull" />
                        )
                    }
                    <table width="100%" height="100%">
                        <tr>
                            <td><h1>Register</h1></td>
                        </tr>
                        <tr>
                            <td><label>Full Name :</label></td>
                            <td><input type="text"></input></td>
                        </tr>
                        <tr>
                            <td><label>Email :</label></td>
                            <td><input type="email"></input></td>
                        </tr>
                        <tr>
                            <td><label>Password :</label></td>
                            <td><input type="password"></input></td>
                        </tr>
                        <tr>
                            <td><label>Confirm Password :</label></td>
                            <td><input type="password"></input></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit" className="btn btn-primary">Register</button></td>
                        </tr>
                    </table>
                </div>
            </form>
        )
    }
}