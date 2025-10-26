import React, { useReducer,useRef } from 'react'
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

//useReducer란?
//리액트에서 간단한 상태관리 = useState
//여러개 = useReducer가 가독성, 유지보수가 쉽다
//const [state, dicpatch] = useReducer(reducer, initialstate);
//state 현재 상태값 (이전의 todo)
//dispatch 상태 변경 명령(액션)을 보낼 함수
//reducer => 상태를 실제 변경하는 '로직함수'
//initialstate => 초기상태값


const mockTodo =[
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    createdDate: new Date().getTime(),
  },  
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },

]

//상태변화 로직
function reducer(state,action){
  switch(action.type){
    case "CREATE" :
      return [action.newItem,...state];
    case "UPDATE" :
      return state. map((it) => 
        it.id === action.targetId ? {...it, isDone : !it.isDone} : it)
    case "DELETE" :
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
  //state -> todo배열 
  //action -> 우리가 dispatch로 보낼 명령객체
  //reducer "현재상태 + 명령(action)"을 받아서 새로운 상태(state) 반환하는 함수
  //dispatch가 실행되면 reducer()가 호출되어
  //type: "create"로 분기 -> return[action,newItem,...state] 실행
}
//전체동작
//사용자가 클릭/입력 -> oncreate/conupdate/ondelete -> dispatch([type:"..."])
//-> reducer(state, action) -> 새로운 state(todo) -> 컴포넌트 자동랜더링

//useReducer 복잡한 상태 관리용 리액트 훅
//reducer() 상태 변경로직을 한곳에 모은 함수
//dispatch() 상태 변경 "명령(action)"을 보냄
//장점: 코드 구조가 명확, 관리/확장 쉬움
//단점: 코드가 useStat보다 약간 길어짐



export default function App() {
 //const [todo, setTodo] = useState(mockTodo);
 const [todo, dispatch] = useReducer(reducer, mockTodo)
 const idRef = useRef(3);
 //todo는 현재 할 일 목록 dispatch는 상태변경요청
 //reducer -> 상태를 실제로 변경할 로직있는 함수 mockTodo(초기값)

 const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem : {
      id: idRef.current,
      content,
      isDone : false,
      createdDate: new Date().getTime(),
      },
    })
    
    idRef.current += 1
 };

 const onUpdate = (targetId) => {
  dispatch({type:"UPDATE", targetId});
 }

const onDelete = (targetId) => {
  dispatch({type:"DELETE", targetId});
 };

  return (
    <div className='App'>
      <Header />    
      <TodoEditor onCreate = {onCreate}/> 
      <TodoList todo={todo} onUpdate = {onUpdate} onDelete = {onDelete}/>  
    </div>
  )
}