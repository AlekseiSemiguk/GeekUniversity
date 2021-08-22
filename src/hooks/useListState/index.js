import { useState } from "react";

export const useListState = () => {

  const [state, setState] = useState([]);
  const [id, setId] = useState(0);


  const append = (...items) => {
    items.map((item, index) => {
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
    }
  ]
}