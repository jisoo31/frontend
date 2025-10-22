import React, { useEffect } from 'react'
import User from './User'

export default function UserList2({users, onRemove, onToggle}) {

useEffect(()=>{
  console.log('컴포넌트가 화면에 나타남');
  return () => { //언마운트 될 때(사라질 때 실행) -> 클린업 함수
    console.log('컴포넌트가 화면에 사라짐')
    //return () =>{}; 소멸 클린업
  }
},[])

  return (
    <div>
        {/* <User user={users[0]}/>
        <User user={users[1]}/>
        <User user={users[2]}/> */}
        {users.map(user=>(
            <User user={user} key={user.id} onRemove= {onRemove} onToggle={onToggle} />
        ))}
    </div>
  )
}
