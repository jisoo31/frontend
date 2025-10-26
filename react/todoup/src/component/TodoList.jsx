import React, { useState } from 'react'
import'./TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList({todo, onUpdate, onDelete}) {
  const [search, setSearch] = useState("");
  //useState 리액트훅을 만든다. - search 검색단어를 관리
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
    //검색 폼의 value (타이핑 치는 글자) State변수 search를 설정
  } 
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    //search ==="" ? todo 검색단어가 없으면 todo prop자체를 리턴
    //검색단어가 있으면 it 항목에 search에 저장되어있는 (글자) 포함 돼 있으면 it(레코드)을 리턴
  }

  return (
    <div className='TodoList'>
      <h4>Todo List 🌱</h4>
      <input 
      className="searchbar" 
      placeholder="검색어를 입력하세요"
      onChange={onChangeSearch}
      //검색 폼의 onChange 이벤트 핸들러 onChangeSearch 만듦
      value={search}
      />

      <div className="list_wrapper">
        {getSearchResult().map((it)=>(
            <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
            // <TodoItem key={it.id} id={it.id} content={it.content} isDone={isDone} crearteDate={it.createDate}/>
        ))}
        {/* ...it 이부분은 전개 연산자(spread Operator) */}
        {/* 객체의 속성을 펼쳐서 자식 컴포넌트 (todoItem)로 전달하는 역할 */}
      </div>
    </div>
  )
}
