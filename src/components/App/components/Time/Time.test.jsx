import { Time } from './Time';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Time', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it('expect to changing time from current to current+100ms|current+1s and current+5s', () => {
    const { container } = render(<Time />);
    let time = new Date();
    expect(container).toHaveTextContent(
      `Current time - ${time.toLocaleTimeString()}`
    );
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(container).toHaveTextContent(
      `Current time - ${time.toLocaleTimeString()}`
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    time.setSeconds(time.getSeconds() + 1);
    expect(container).toHaveTextContent(
      `Current time - ${time.toLocaleTimeString()}`
    );
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    time.setSeconds(time.getSeconds() + 5);
    expect(container).toHaveTextContent(
      `Current time - ${time.toLocaleTimeString()}`
    );
  });
});
