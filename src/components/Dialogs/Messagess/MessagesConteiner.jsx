import './Messages.css';
import {
    onSendMessageCLick,
} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Messages from "./Messages";

const mapStateToProps = state => ({
    MessagesData: state.dialogsReducer.MessagesData,
});

const MessagesContainer = connect(mapStateToProps, {
    onSendMessageCLick,
})(Messages);

export default MessagesContainer;