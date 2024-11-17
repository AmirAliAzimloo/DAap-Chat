import React, { useState, useEffect, useContext } from "react";
import PrivateChat from "../../../components/PrivateChat";

function ChatHome() {


  return (
    <div className="home">
      <div className="container">
        <PrivateChat />
      </div>
    </div>
  );
}

export default ChatHome;
