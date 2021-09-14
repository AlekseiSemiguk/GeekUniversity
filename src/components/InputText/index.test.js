import React from 'react'

import { render, fireEvent, act } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { InputText, InputTextTestIds } from "./index";


describe('InputText', () => {

  it('отсутствие вызова метода onSubmit, если поле text пустое', () => {

    const buttonText = "";
    const text = "";
    const onSubmit = jest.fn();
    const onChange = jest.fn();

    const component = render(<InputText onSubmit={onSubmit} buttonText={buttonText} onChange={onChange} text={text} />)

    const button = component.queryByTestId(InputTextTestIds.button);

    act(() => {
      fireEvent.click(button);
    })

    expect(onSubmit).not.toBeCalled();
  });
 
})