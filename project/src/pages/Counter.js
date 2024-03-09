import React, {useState} from "react";

const Counter = () =>{
    const [num, setNumber] = useState(0);
    
    const increase = () => setNumber(num + 1);
    const decrease = () => setNumber(num - 1);
    
    return(
    <div>
        <button onClick = {increase}>+1</button>
        <button onClick = {decrease}>-1</button>
        <p>{num}</p>
    </div>
    );
     
};
export default Counter;


//동적인 값 = state 동적인 값 처리 => useState 
// const [num, setNumber] = useState(0); 은 const num = 0;과 같다 | setNumber은 num이란 변수를 변경할 수 있는 set함수 이다.
// useState를 선언한 변수는 반드시 함수를 통해 제어해야함