import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesContainer from "./Messagess/MessagesConteiner";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogs__items-list">
        <DialogItem />
      </div>
      <div className="dialogs__messages-list">
        <MessagesContainer />
      </div>
    </div>
  )
};

export default compose(
    WithAuthRedirect,
)(Dialogs);

