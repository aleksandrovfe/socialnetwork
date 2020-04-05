import React from 'react';
import './Messages.css';
import AddMessageResuxForm from "./AddMessageForm/AddMessageForm";

const Messages = props => {
    const addNewMessage = event => {
        props.onSendMessageCLick(event.messageBody);
    };

  return (
    <div>
      {props.MessagesData.map(el => (
      <div key={el.message} className="dialog__conv">{el.message}</div>
      ))}
      <AddMessageResuxForm onSubmit={addNewMessage} {...props}/>
    </div>
  )
};

export default Messages;