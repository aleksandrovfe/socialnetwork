const SEND_MESSAGE = 'SEND_MESSAGE';

const initislState = {
    DialogsData: [
        {name: 'Alex', id: 1},
        {name: 'Masha', id: 2},
        {name: 'Pasha', id: 3},
        {name: 'Sasha', id: 4},
    ],

    MessagesData: [
        {message: 'Hi', id: 1},
        {message: 'It"s me', id: 2},
        {message: 'HRU', id: 3},
        {message: 'BRB', id: 4},
    ],
};

export const dialogsReducer = (state = initislState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                MessagesData: [...state.MessagesData, {message: action.messageBody, id: 6}],
            };
        default:
            return state;
    }
};

export const onSendMessageCLick = messageBody => ({
    type: SEND_MESSAGE,
    messageBody,
});
