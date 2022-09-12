/* import { AddMessage } from './AddMessage';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('AddMessage', () => {
  let app: RenderResult, setterMessage: jest.Mock;

  beforeEach(() => {
    setterMessage = jest.fn();
    app = render(<AddMessage messageSetter={setterMessage} author="Max" />);
  });

  it('expect send AddMessage form without ERRORS', () => {
    fireEvent.change(app.getByPlaceholderText('Type your message'), {
      target: { value: 'message' },
    });

    expect(app.getByPlaceholderText('Type your message')).toHaveValue(
      'message'
    );

    fireEvent.submit(app.getByTestId('addmessage'));

    expect(app.getByPlaceholderText('Type your message')).toHaveValue('');

    expect(setterMessage).toHaveBeenCalledTimes(1);
  });

  it('expect setterMessage no call and set ERROR message and remove ERROR', () => {
    fireEvent.click(app.getByTestId('addmessage'));

    expect(app.getByPlaceholderText('Type your message')).toHaveValue('');

    expect(setterMessage).toHaveBeenCalledTimes(0);

    expect(app.getByText('Please type your message!')).toBeInTheDocument;

    fireEvent.change(app.getByPlaceholderText('Type your message'), {
      target: { value: 'message' },
    });

    fireEvent.click(app.getByTestId('addmessage'));

    expect(app.queryByText('Please type your message!')).not.toBeInTheDocument;
  });
});
 */
