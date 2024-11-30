import React from "react";
import { useState, useEffect } from "react";

export default function ChatList(){
    const [chats, setChats] = useState([]);

    useEffect(() => {
        let messages = JSON.parse(localStorage.getItem("chats"));
        setChats(messages);
    });
    return <div><h1>ChatList Page</h1>
    <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>UserName</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {chats.map((item, index) => (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.userName}</td>
                        <td>{item.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}