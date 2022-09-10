import { useState, useEffect } from 'react';

export function Time() {
  const [timer, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <br />
      Current time - {timer.toLocaleTimeString()}
    </div>
  );
}
