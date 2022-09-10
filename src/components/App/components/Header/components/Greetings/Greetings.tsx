import { FC } from "react";

interface GreetingsProps {
  name: string;
}

export const Greetings: FC<GreetingsProps> = ({ name }) => (
  <h3
    data-testid="greetings"
    style={{ backgroundColor: '#ddd', color: '#000' }}
  >
    Hello, {name}!
  </h3>
);
