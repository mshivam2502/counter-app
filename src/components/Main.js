import React from 'react'

export default function Main(){

    const [count, setCount] = React.useState(0);
    const [bool, setBool] = React.useState("");

    function handleIncr(){
        setCount((count)=>{
            return count+1;
        });
    }
    function handleDecr(){
        setCount((count)=>{
            return count-1;
        });
    }
    function handleReset(){
        setCount(0);
    }
    React.useEffect(()=>{
        if(count===0){
            setBool("hidden");
        }
        else{
            setBool("");
        }
    },[count]);




    return (
        <div className="main">
            <div className="counter">
                <button className={"decr "+bool} onClick={handleDecr}>Decrement</button>
                <div className="count">
                    <h1>{count}</h1>
                </div>
                <button className="incr" onClick={handleIncr}>Increment</button>
            </div>
            <div className="buttons">
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>

    )
}