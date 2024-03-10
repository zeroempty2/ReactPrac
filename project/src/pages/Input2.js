import React, {useState} from "react";

const Input2 = () =>{
    const [inputs, setInputs] = useState({
        name:"",
        tel:"",
        email:"",
        
    });

    const {name, tel, email} = inputs;
 
    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id] : value
        });
    };

    return(
    <div>
        <div>
            <label>이름</label>
            <input type = "text" id = "name" value = {name} onChange = {onChange}/>
        </div>
        <div>
            <label>전화번호</label>
            <input type = "tel" id = "tel" value = {tel} onChange = {onChange}/>
        </div>
        <div>
            <label>이메일</label>
            <input type = "email" id = "email" value = {email} onChange = {onChange}/>
        </div>
       <br/>
       <p>이름 : {name}</p>
       <p>전화번호 : {tel}</p>
       <p>이메일 : {email}</p>
    </div>
    );
     
};
export default Input2;


//...이용해 깊은 복사를 해야 값 변경 가능