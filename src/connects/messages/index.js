import { connect } from "react-redux";
import { messagesSelectors, createAddMessage, createDeleteMessages } from "../../store/messages";


const mapStateToProps = (state, { chatId }) => ({
  messages: messagesSelectors.getMessage(state, chatId),
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(createAddMessage(message)),
  deleteMessages: (chatId) => dispatch(createDeleteMessages(chatId)),
})

export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);