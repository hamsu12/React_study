import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface WelcomeProps{
    name : string;
}

function Welcome(props:WelcomeProps){
    return <h1>안녕하세요 {props.name}님</h1>;
}

function App() {
    const name = "Hamsu"
    const style={
        color:"blue",
        background:"yellow",
    };
  return (
    <div className="header">
      <h1 style={style}>Hello World</h1>
        <p>저는 {name}입니다.</p>
        <Greeting/>
        <Welcome name="수정"/>
        <Counter />
    </div>
  );
}

function Greeting(){
    return <h1>안녕하세요!</h1>
}

function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>현재 카운트 : {count}</p>
            <button onClick={() => setCount(count+1)}>증가</button>
        </div>
    )
}

export default App;
