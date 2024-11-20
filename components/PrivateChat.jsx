import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import PrivateMessage from "./PrivateMessage";
import PrivateInput from "./PrivateInput";
import { useRouter } from "next/router";

const PrivateChat = ({ friend }) => {
  const { selectedUserName, logoutUser, setPrivateMessagesList,user } = useContext(ChatContext);
  const [username,setUsername] = useState(undefined);

  const router = useRouter();

  useEffect(()=>{
    const userInfo = localStorage.getItem("username");
    const parsedValue = JSON.parse(userInfo);

    setUsername(parsedValue)
  },[])


  return (
    <div className="chat">
       
      <div className="chatInfo">
        <div style={{color:'pink',cursor:'pointer'}} onClick={()=>router.back()}>back</div>

        <div
        style={{cursor:"pointer"}}
          onClick={() => {
            const messageKey = `messages-${username}`;
            setPrivateMessagesList([]);
            localStorage.removeItem(messageKey);
          }}
        >
          Clear Chat
        </div>

      <span className="logo">DApp Chat</span>
      <div>
        <button  onClick={logoutUser}>logout</button>
      </div>

      </div>
      <PrivateMessage />
      <PrivateInput />
    </div>
  );
};

export default PrivateChat;
