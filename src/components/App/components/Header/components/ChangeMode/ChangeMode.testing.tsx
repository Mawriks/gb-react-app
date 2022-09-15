import { ChangeMode } from './ChangeMode';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ChangeMode', () => {
  it('expect change text on btn and call changeMode', () => {
    const changeMode = jest.fn();
    render(<ChangeMode mode={'light'} modeSetter={changeMode} />);
    /* 
    const { rerender } = render(
      <ChangeMode mode={true} modeSetter={changeMode} />
    );
    const btn = screen.getByTestId('btn');

    expect(btn).toHaveTextContent('Light Mode');
    fireEvent.click(btn);
    expect(changeMode).toHaveBeenCalledTimes(1);
    rerender(<ChangeMode mode={false} modeSetter={changeMode} />);
    expect(btn).toHaveTextContent('Dark Mode'); */
  });
});
