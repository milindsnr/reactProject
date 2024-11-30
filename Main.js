import React from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import Register from "./Register";
import LoginSuccessfull from "./LoginSuccessfull";
import RegisterSuccessfull from "./RegisterSuccessfull";
import ChatList from "./ChatList";
import UserList from "./UserList";
import EditList from "./EditList";
import DocumentList from "./DocumentList";
import Logout from "./Logout";
import Nav from "./Nav"
import NotFound from "./NotFound"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class Main extends React.Component {
    render() { // lifecycle
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome username={this.props.username} />}></Route>
                    <Route path="/ChatList" element={<ChatList />} ></Route>
                    <Route path="/UserList" element={<UserList />} ></Route>
                    <Route path="/EditList" element={<EditList />}></Route>
                    <Route path="/DocumentList" element={<DocumentList />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/RegisterSuccessfull" element={<RegisterSuccessfull />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    }
}

/*
            <Login />
            <Welcome />
            <Register />
            <LoginSuccessfull />
            <RegisterSuccessfull />
            <ChatList />
            <UserList />
            <EditList />
            <DocumentList />
            <Logout />
*/