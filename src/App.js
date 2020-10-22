import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      );
  }, []);

  return (
    <div className="app">
      <img
        src="https://www.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w-100&h=100"
        alt=""
      />
      <p> WELCOME TO MESSENGER APP</p>
      <h2>Welcome {username} </h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            type="submit"
            onClick={sendMessage}
            variant="contained"
            color="primary"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
