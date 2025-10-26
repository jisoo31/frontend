import React, { useState, useRef } from 'react';
import './TodoEditor.css';

export default function TodoEditor({onCreate}) {
  const[content, setContent] = useState("");
  const inputRef = useRef();
  const onchangeContent = (e) => {
    setContent(e.target.value);
    // console.log(e.target.value)
    //키보드로 실시간으로 입력하는 사항을 content에 저장

  };
  const onKeyDown = (e) => {
    if(e.keyCode == 13){
      onSubmit();
    }
  };
  const onSubmit = () =>{
    if(!content){
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기 🖍 </h4>
      <div className="editor_wrapper">
        <input 
        placeholder="새로운 Todo..." 
        value={content}
        onChange={onchangeContent}
        onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}
