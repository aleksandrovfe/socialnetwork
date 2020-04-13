import React from 'react';
import {NavLink} from 'react-router-dom';
import './DialogItem.css';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    dialogs: state.dialogsReducer.DialogsData,
});

const DialogItem = props => {
    return (
        props.dialogs.map(el => (
            <div key={el.id}>
                <NavLink to={"/dialogs/" + el.id} activeClassName="dialogs__item--active"
                         className="dialogs__item-wrapper">
                    <div className="dialogs__item">{el.name}</div>
                    <div className="dialogs__item-last-message">Hello</div>
                </NavLink>
            </div>
        ))
    )
};

export default connect(mapStateToProps, null)(DialogItem);

