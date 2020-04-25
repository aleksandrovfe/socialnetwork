import { DialogsDataType, MessagesDataype } from "../types/types";

const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  DialogsData: [
    { name: "Alex", id: 1 },
    { name: "Masha", id: 2 },
    { name: "Pasha", id: 3 },
    { name: "Sasha", id: 4 },
  ] as Array<DialogsDataType>,

  MessagesData: [
    { message: "Hi", id: 1 },
    { message: "How are you today?", id: 2 },
    { message: "Happy new Year", id: 3 },
    { message: "Happy Birthday ", id: 4 },
  ] as Array<MessagesDataype>,
};

type initialStateType = typeof initialState;

export const dialogsReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        MessagesData: [
          ...state.MessagesData,
          { message: action.messageBody, id: 6 },
        ],
      };
    default:
      return state;
  }
};

type onSendMessageCLickActionType = {
  type: typeof SEND_MESSAGE;
  messageBody: string;
};

export const onSendMessageCLick = (messageBody: string) => ({
  type: SEND_MESSAGE,
  messageBody,
});
