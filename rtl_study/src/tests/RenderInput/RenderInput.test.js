import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderInput from './RenderInput';

afterEach(() => cleanup());

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<RenderInput />);
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy();
  });
});

describe('input form onChange event', () => {
  it('should update input value correctly', async () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText('Enter');
    await userEvent.type(inputValue, 'test');
    expect(inputValue.value).toBe('test');
  });
});

describe('console button conditionally triggered', () => {
  it('should not trigger output function', () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    userEvent.click(screen.getByRole('button'));
    expect(outputConsole).not.toHaveBeenCalled();
  });

  it('should trigger output function', async () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);

    const inputValue = screen.getByPlaceholderText('Enter');
    await userEvent.type(inputValue, 'test');

    await userEvent.click(screen.getByRole('button'));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
