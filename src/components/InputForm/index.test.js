import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, act } from '@testing-library/react';
import { InputForm, InputFormTestIDs } from "./index";

describe('InputForm', () => {
  it('корректная надпись на кнопке', () => {

    const component = render(<InputForm buttonText={"отправить"} />);

    expect(component.queryByTestId(InputFormTestIDs.textButton)).toHaveTextContent('отправить');

  })

})