import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import { ChatContext } from "../context/ChatContext";

const Input = () => {
  const {
    setSearchAccount,
    searchAndAddFriend,
    setMessageInput,
    sendMessage,
    messageInput,
  } = useContext(ChatContext);

  const [text, setText] = useState("");

  const onSendMessage = async (e) => {
    try {
      e.preventDefault();
      const userInfo = localStorage.getItem("username") ?? "";
      const parsedUser = JSON.parse(userInfo);

      const res = await fetch("/api/socket/message", {
        method: "POST",
        body: JSON.stringify({ message: text, user: parsedUser }),
      });

      if (res.status == 200) {
        const { data } = await res.json();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setText("");
    }
  };

  return (
    <form onSubmit={onSendMessage} className="input">
      <input
        value={text}
        required
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default Input;
