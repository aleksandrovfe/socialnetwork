import React, {useEffect, useState} from "react";
import './ProfileStatus.css';

export const ProfileStatus = props => {
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateMode = () => {
        setEditMode(true);
    };

    const deactivateMode = () => {
        setEditMode(false);

        props.updateStatusThunk(status);
    };

    const onStatusChange = event => {
        setStatus(event.currentTarget.value);
    };

    return (
        <div className="personal-information__item personal-information__item-status">
            {!editMode
                ? props.isOwner
                    ? <div className="status__text" onDoubleClick={activateMode}>{status || "Double click to change status..."}</div>
                    : <div className="status__text">{status || "My status could be here..."}</div>
                : props.isOwner 
                    ? <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateMode} className="status__input" type="text"/>
                    : ''
            }
        </div>
    )
};