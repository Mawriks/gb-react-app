import { ChangeName } from './ChangeName';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ChangeName', () => {
  let app: RenderResult, setterName: jest.Mock;

  beforeEach(() => {
    setterName = jest.fn();
    app = render(<ChangeName nameSetter={setterName} />);
  });

  it('expect setterName call', () => {
    fireEvent.change(app.getByPlaceholderText('Your new name'), {
      target: { value: '2223' },
    });
    expect(app.getByPlaceholderText('Your new name')).toHaveValue('2223');

    fireEvent.click(app.getByTestId('mui-btn'));

    expect(app.getByPlaceholderText('Your new name')).toHaveValue('');

    expect(setterName).toHaveBeenCalledTimes(1);
  });

  it('expect setterName no call and set ERROR message and remove ERROR', () => {
    fireEvent.click(app.getByTestId('mui-btn'));

    expect(app.getByPlaceholderText('Your new name')).toHaveValue('');

    expect(setterName).toHaveBeenCalledTimes(0);

    expect(app.getByText('Fill the name field!')).toBeInTheDocument;

    fireEvent.change(app.getByPlaceholderText('Your new name'), {
      target: { value: '2223' },
    });

    fireEvent.click(app.getByTestId('mui-btn'));

    expect(app.queryByText('Fill the name field!')).not.toBeInTheDocument;
  });
});
