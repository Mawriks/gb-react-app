import { AddMessage } from './AddMessage';
import { render, fireEvent } from '@testing-library/react';

describe('AddMessage', () => {
  let app, setterMessage;

  beforeEach(() => {
    setterMessage = jest.fn();
    app = render(<AddMessage messageSetter={setterMessage} author="Max" />);
  });

  it('expect send AddMessage form without ERRORS', () => {
    fireEvent.change(app.getByPlaceholderText('Type your message'), {
      target: { value: 'message' },
    });

    expect(app.getByPlaceholderText('Type your message').value).toBe('message');

    fireEvent.submit(app.getByTestId('addmessage'));

    expect(app.getByPlaceholderText('Type your message').value).toBe('');

    expect(setterMessage).toHaveBeenCalledTimes(1);
  });
});
