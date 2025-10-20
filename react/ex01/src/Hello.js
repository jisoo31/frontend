
import React from 'react'

// export default function Hello(props) {
//   return (
//     <div style={{color:props.color}}>안녕하세요 {props.name}</div>
//     // {}2개-> React JSx의 문법
//     //1번째{} 자바스크립트 표현식 
//     //2번째{} 자바스크립트 객체 리터럴 
//   )

// export default function Hello({color,name}) {
//   return (
//     <div style={{color}}>안녕하세요 {name}</div>
//     //  비구조화 할당은 좀 더 간결하게 작성 가능
//   )
// }
function Hello({color,name='이름없음',isSpecial}) {
    return (
    <div style={{color}}>
        {isSpecial ? <b>*</b> : null}
        안녕하세요 {name}
    </div>
  );
}
    export default Hello; 
