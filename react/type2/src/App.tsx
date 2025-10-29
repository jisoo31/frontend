import React, { useState } from 'react'

export default function App() {
// const [result, setResult] = useState<number>(0)
// 배열과 객체 예제
const numbers: number[] = [1, 2, 3, 4, 5] //숫자타입
const fruits: Array<string> = ["사과", "바나나", "오렌지"] //문자배열타입

//제네릭 Array<ty성격>

//인터페이스
interface Person{
  name : string
  age : number
  email?: string
  //선택적 속성 -> 있어도 되고 없어도 됨
}


const persona1: Person = {
  name: "홍길동",
  age: 30,
}

const persona2: Person = {
  name: "김철수",
  age: 25,
  email: "kim@example.com"
};

  return (
    <div className='App'>
      <header>
        <h1>react TypeScript 예제</h1>
      </header>
      <div className="container">
        {/* 기본타입 섹션 */}
        <section className="card">
          <h2>1. 기본 타입</h2>
          <div className="content">
            <p><strong>name:</strong> {"TypeScript"}</p>
            <p><strong>age:</strong> {13}</p>
            <p><strong>isActive:</strong> {true ? "true" : "false"}</p>
          </div>
        </section>

        {/* 배열 */}
        <section className="card">
          <h2>2. 배열</h2>
         <div className="content">
            <p><strong>숫자배열</strong> [{numbers.join(',')}]</p>
            <p><strong>과일배열</strong> [{fruits.join(',')}]</p>
          </div>
        </section>


        {/* 인터페이스 */}
        <section className="card">
          <h2>3. 인터페이스</h2>
         <div className="content">
            <div className='person-card'>
              <h3>{persona1.name}</h3>
              <p>나이: {persona1.age}</p>
              <p>이메일: {persona1.email || "없음"}</p>
            </div>
            <div className='person-card'>
              <h3>{persona2.name}</h3>
              <p>나이: {persona2.age}</p>
              <p>이메일: {persona2.email || "없음"}</p>
            </div>
          </div>
        </section>       
      </div>
  </div>
  )
}
