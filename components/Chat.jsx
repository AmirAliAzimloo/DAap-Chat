import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import Input from "./Input";

const Chat = () => {
  const { selectedUserName, logoutUser } = useContext(ChatContext);
  const [username,setUsername] = useState(undefined);

  useEffect(()=>{
    const userInfo = localStorage.getItem("username");
    const parsedValue = JSON.parse(userInfo);

    setUsername(parsedValue)
  },[])


  return (
    <div className="chat">
       
      <div className="chatInfo">
        <span>{username ?? ""}</span>

      <span className="logo">DApp Chat</span>
      <div>
        <button  onClick={logoutUser}>logout</button>
      </div>

      </div>
      <Message />
      <Input />
    </div>
  );
};

export default Chat;
