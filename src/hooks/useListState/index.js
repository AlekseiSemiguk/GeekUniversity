import { useState } from "react";
import faker from 'faker';

export const useListState = () => {

  const [state, setState] = useState([]);
  const [id, setId] = useState(0);

  const append = (...items) => {
    items.forEach((item, index) => {
      item.id = id + index;
    });
    setId(id + items.length);
    setState((state) => {
      return [
        ...state,
        ...items,
      ]
    })
  }

  const prepend = (...items) => {
    setState((state) => {
      return [
        ...items,
        ...state,
      ]
    })
  }

  const clear = () => setState([]);

  const addMessage = (chatId, messageText) => {
    const chat = state.find(({ id }) => (id == chatId));
    const index = state.indexOf(chat);
    const copy = Object.assign([], state);
    const object = copy[index]
    const arrMess = object.arrMessages;
    arrMess.push({ author: "user", text: messageText, id: faker.datatype.uuid() });
    setState(copy);
  }

  const remove = (...indexes) => {
    setState((state) => {
      return state.filter((_, index) => !indexes.includes(index))
    })
  }

  return [
    state,
    {
      append,
      prepend,
      clear,
      remove,
      addMessage,
    }
  ]
}