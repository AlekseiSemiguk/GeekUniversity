
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGES = 'DELETE_MESSAGES';

export const createAddMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message
})


export const createAddMessageWithThunk = (message) => async (dispatch) => {
  dispatch(createAddMessage(message));
  if (message.chatId !== "BOT") {
    const chatId = message.chatId;
    const botMessage = {
      chatId,
      author: 'BOT',
      id: Date.now().toString(),
      content: "Привет, Я Вася!",
    };
    setTimeout(() => {
      dispatch(createAddMessage(botMessage))
    }, 3000);
  }
}

export const createDeleteMessages = (chatId) => ({
  type: DELETE_MESSAGES,
  payload: chatId
})