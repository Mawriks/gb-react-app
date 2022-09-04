import { ChangeName } from './ChangeName';
import { render, fireEvent } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';

describe('ChangeName', () => {
  let app, setterName;

  beforeEach(() => {
    setterName = jest.fn();
    app = render(<ChangeName nameSetter={setterName} />);
  });

  it('expect setterName call', () => {
    fireEvent.change(app.getByPlaceholderText('Your new name'), {
      target: { value: '2223' },
    });
    expect(app.getByPlaceholderText('Your new name').value).toBe('2223');

    fireEvent.click(app.getByText('Change'));

    expect(app.getByPlaceholderText('Your new name').value).toBe('');

    expect(setterName).toHaveBeenCalledTimes(1);
  });

  it('expect setterName no call and set ERROR message and remove ERROR', () => {
    fireEvent.click(app.getByText('Change'));

    expect(app.getByPlaceholderText('Your new name').value).toBe('');

    expect(setterName).toHaveBeenCalledTimes(0);

    expect(app.getByText('Fill the name field!')).toBeInTheDocument;

    fireEvent.change(app.getByPlaceholderText('Your new name'), {
      target: { value: '2223' },
    });

    fireEvent.click(app.getByText('Change'));

    expect(app.queryByText('Fill the name field!')).not.toBeInTheDocument;
  });
});
