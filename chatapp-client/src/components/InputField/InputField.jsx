import React from 'react'
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";
import './InputField.css'
const InputField = ({message,setMessage,sendMessage}) => {

  return (
    <div className="input-area">
          <div className="plus-button">+</div>
          {/* onSubmit이 호출되면 sendMessage 호출됨 */}
          <form onSubmit={sendMessage} className="input-container">
            <Input
              placeholder="Type in here…"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              multiline={false}
              rows={1}
            />

            <Button
              disabled={message === ""}
              type="submit"
              className="send-button"
            >
              Send
            </Button>
          </form>
        </div>
  )
}

export default InputField