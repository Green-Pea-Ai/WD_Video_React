import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyTestComponent from './MyTestComponent'
import DefaultPropsTest from './DefaultPropsTest'
import TypePropsTest from './TypePropsTest'
import NumberPropsTest from './NumberPropsTest'


function App() {
    const reactText = 'Golang'
    const condition = true
    const style = {
        backgroundColor: 'gray',
        border: '1px solid black',
        height: Math.round(Math.random() * 300) + 50,
        width: Math.round(Math.random() * 300) + 50
    }
    return (
        <div className="my-div">
            <h1>Halo ReactJS</h1>
            <h2>Golang Based ReactJS</h2>
            <h3>{ reactText }</h3>
            {
                condition ? '참' : '거짓'
            }
            <p>{ condition && '가즈아' }</p>
            <div style={style}></div>
            <form>
                First name: <br/>
                <input type="text" name="first_name"/><br/>
                Last name: <br/>
                <input type="text" name="last_name"/><br/>
            </form>
            // You cant' write comment!
            /* this, too */
            <div
            // We can do it!
            />
            <MyTestComponent name="React wanDoo"/>
            <br/>
            <DefaultPropsTest/>
            <br/>
            <TypePropsTest name={3}/>
            <NumberPropsTest name="Rust" age={10}/>
        </div>
      );
    }
/* line 20: condition이 거짓이면 && 뒤에 가즈아가 안나온다 */
/* vue가 300라인이라면 react는 500라인 정도는 쳐야 구현이 됨 */
/* split js가 새로 나왔다?, split이 아니고 스벨트 */
/* 프론트는 변화가 빠르다 */
/* 리액트에서도 컴포넌트 만드는게 중요함 */
export default App;
