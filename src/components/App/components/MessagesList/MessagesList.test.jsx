import { MessagesList } from './MessagesList';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('MessagesList', () => {
  it('expect render list', () => {
    const list = [
      { author: 'Max', text: 'message' },
      { author: 'Alex', text: 'message' },
    ];
    const { container } = render(<MessagesList messageList={list} />);
    expect(container.querySelector('ul')).toContainHTML(
      '<li>Max: message</li><li>Alex: message</li>'
    );
  });
});
