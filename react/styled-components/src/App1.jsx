import React from 'react'
import styled from "styled-components";

const Button= styled.button`
  background: #4f46e5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cuser: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s;

  &:hover{
    background: #3f3ab9;
  }
  &:active{
    background: #322f8c;
  }
`


export default function App() {
  return (
    <Button>
      기본버튼
    </Button>
  )
}
