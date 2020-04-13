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
        {message: 'How are you today?', id: 2},
        {message: 'Happy new Year', id: 3},
        {message: 'Happy Birthday ', id: 4},
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
