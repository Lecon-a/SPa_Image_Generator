import React from 'react';

function WorkWithEffect() {
    //const [startWarData, setStarWarData] = React.useState({});
    const [count, setCount] = React.useState(0);

    console.log("Component rendered");

    React.useEffect(() => {
        console.log("Inside effect");
    }, [count])

    const handleClick = () => {
        setCount(prevCount => ++prevCount);
    }

    return (
        <div>
            <pre>{count}</pre>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default WorkWithEffect;