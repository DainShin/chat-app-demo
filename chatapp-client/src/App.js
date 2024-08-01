import React, { useEffect, useState } from "react";
import "./App.css";

// bring the socket from the server.js file
import socket from "./server";

import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  console.log("message List", messageList);
  useEffect(() => {
    // if client receive something from the server named message
    socket.on("message",(message) => {
      setMessageList((prevState) => prevState.concat(message));
    });
    askUserName();
  }, []);


  // demo section
  

  return (
    <div>
      <div className="App">
        <MessageContainer messageList={messageList} user={user}/>
        <InputField message={message} 
                    setMessage={setMessage} 
                    sendMessage={sendMessage} 
        />
      </div>
    </div>
  );
}

export default App;
