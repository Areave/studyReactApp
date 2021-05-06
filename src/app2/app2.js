import { useEffect, useState } from 'react'
import "./app2.css";


const App2 = () => {

    const [count, setCount] = useState(0);
    const [data, refreshData] = useState([{ name: 'paul', age: 45 }]);

    useEffect(() => {
        updateChar();
        let t = setInterval(updateChar, 2000);
        return () => { clearInterval(t) };
    });


    const updateChar = () =>{ console.log('char is updated') };

    if (count>5) {
            useEffect()();   
    }

    return <div className="count">



        <p>you clicked {count} times</p>
        {data.map(item => {
            return (
                <p>age is {item.age} of {item.name}</p>
            )
        })}
        <button onClick={() => setCount(count + 1)}>click me</button>
        <button onClick={() => refreshData(data => ([...data, { name: 'ringo', age: data[0].age + 1 }]))}>data click me</button>
    </div >
}

export default App2;