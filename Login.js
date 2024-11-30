import React from "react";

export default class Login extends React.Component {
    render() {
        return <div><h1>Login</h1>
            <form>
                <table width="100%" height="100%">
                    <tr>
                        <td><label>Email :</label> </td>
                        <td><input type="email"></input></td>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input type="password"></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Login" className="btn btn-primary" /></td>
                </tr>
                </table>
                
            </form>

        </div>
    }
}