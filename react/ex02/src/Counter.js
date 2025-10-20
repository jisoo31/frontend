
import React, { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)
  // number(현재값)는 setNumbe에서 조작 가능
  // 동적state(상태값, 나중에 변경 가능) 을 관리하는 useState (초기값 0 줌)

  const onIncrease = () =>{
    // setNumber(number + 1);
    // setNumber(number + 1);
    // 상태 업데이트가 연속으로 일어나는 경우, 비동기적으로 업뎃되면 예기치 않는 값이 나올 수 있음
    setNumber(prevNumber => prevNumber+1); //함수형 업데이트(업데이트할 때마다 함수 실행)
    setNumber(prevNumber => prevNumber+1); //출력결과: 2씩 증가함
  }
  const onDecrease = () =>{
    // setNumber(number - 1);
    // setNumber(number - 1);
    setNumber(prevNumber => prevNumber-1);
  }
  
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
  )
}
