import { connect } from "react-redux";
import { messagesSelectors, createAddMessageWithThunk, createDeleteMessages } from "../../store/messages";


const mapStateToProps = (state, { chatId }) => ({
  messages: messagesSelectors.getMessage(state, chatId),
})

const mapDispatchToProps = (dispatch) => ({
  addMessageWithThunk: (message) => dispatch(createAddMessageWithThunk(message)),
  deleteMessages: (chatId) => dispatch(createDeleteMessages(chatId)),
})

export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);