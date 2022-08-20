import { useState, useEffect } from 'react';


function Time(){

    const [timer, setTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
      }, []);

    return <div>Current time - {timer.toLocaleTimeString()}</div>
}


export default Time;