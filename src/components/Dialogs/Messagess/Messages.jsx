import React from 'react';
import './Messages.css';
import AddMessageResuxForm from "./AddMessageForm/AddMessageForm";

const Messages = props => {
    const addNewMessage = event => {
        props.onSendMessageCLick(event.messageBody);
    };

    return (
        <div className="dialog__wrapper">
            <div className="dialog__background">
                {props.MessagesData.map(el => (
                    <div key={el.id}>
                        <p className="dialog__user-name">Alex</p>
                        <p key={el.message} className="dialog__message">{el.message}</p>
                    </div>
                ))}
            </div>
            <AddMessageResuxForm onSubmit={addNewMessage} {...props}/>
        </div>
    )
};

export default Messages;