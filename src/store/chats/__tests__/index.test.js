import { initialState, chatsReducer } from "../reducer";
import { createAddChats } from "../actions";


describe('chatsReducer', () => {

  it('вызов редьюсера без экшена вернет initialState', () => {

    const result = chatsReducer();

    expect(result).toEqual(initialState);
  });

  it('добавляем чаты в список', () => {

    const result = chatsReducer(undefined, createAddChats([
      { title: 'one' },
      { title: 'two' }
    ]));

    expect(result).toEqual({
      chats: [
        { title: 'one' },
        { title: 'two' }
      ]
    })
  });
})