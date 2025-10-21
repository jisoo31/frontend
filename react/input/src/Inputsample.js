import React, { useState } from 'react'

export default function Inputsample(){
    const [text, setText] = useState('');
    //useState('')초기값
    //text 현재값
    //setText text값을 변경할 수 있다


    //e는 이벤트 객체 = 파라미터 받아옴
    //e.target 현재 이벤트가 발생하는 don(input)
    //e.target.value input창에 써지는 글씨값을 받아옴
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () =>{
        setText('');
    };

    //e.target.value를 조회하면 현재 input의 value값을 알 수 있다.

  return (
    <div>
        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값 : {text} </b>
        </div>
    </div>    
);
}