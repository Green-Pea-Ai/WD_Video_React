import React, { Component } from 'react';
// import logo from './logo.svg';
import styles from './App.css';
import MyTestComponent from './MyTestComponent'
import DefaultPropsTest from './DefaultPropsTest'
import TypePropsTest from './TypePropsTest'
import NumberPropsTest from './NumberPropsTest'
import ConstructorPropsTest from './ConstructorPropsTest'
import ClickEventPropsTest from './ClickEventPropsTest'
import NonConsEventPropsTest from './NonConsEventPropsTest'
import EventPractice from './event/EventPractice'
import ChangeEventPrac from './event/ChangeEventPrac'
import ReadChangeEventContent from './event/ReadChangeEventContent'
import ChangeClickEventTest from './event/ChangeClickEventTest'
import ChangeClickEventHandler from './event/ChangeClickEventHandler'
import ChangeClickEventHandlerNonCons from './event/ChangeClickEventHandlerNonCons'
import IdPwEventPrac from './event/IdPwEventPrac'
import AddEnterEvent from './event/AddEnterEvent'
import BGTest from './reference/BGTest'
import RefBoxTest from './reference/RefBoxTest'
import RefBoxBottomTest from './reference/RefBoxBottomTest'
import IterationSample from './repeat/IterationSample'
import StateBasedIteration from './repeat/StateBasedIteration'
import StateBasedEventIteration from './repeat/StateBasedEventIteration'
import LifeCycleSample from './lifecycle/LifeCycleSample'
import classNames from 'classnames/bind'
import SassComponent from './SassComponent'

const cx = classNames.bind(styles)

// function App()
class App extends Component {

    render() {
        const reactText = 'Golang'
        const condition = true
        const style = {
            backgroundColor: 'gray',
            border: '1px solid black',
            height: Math.round(Math.random() * 300) + 50,
            width: Math.round(Math.random() * 300) + 50
        }
        /*
        const box = {
            display: "inline-block",
            width: "100px",
            height: "100px",
            border: "1px solid black",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        } */
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
                <ConstructorPropsTest name="Verilog" age={7}/>
                <ClickEventPropsTest name="C#" age={3}/>
                <NonConsEventPropsTest name="C++" age={2}/>
                <EventPractice/>
                <ChangeEventPrac/>
                <ReadChangeEventContent/>
                <ChangeClickEventTest/>
                <ChangeClickEventHandler/>
                <ChangeClickEventHandlerNonCons/>
                <IdPwEventPrac/>
                <AddEnterEvent/>
                <BGTest/>
                <RefBoxTest/>
                <RefBoxBottomTest ref={(ref) => this.refBoxBottomTest = ref}/>
                <button onClick={() => this.refBoxBottomTest.scrollToBottom()}>Bottom</button>
                <IterationSample/>
                <StateBasedIteration/>
                <StateBasedEventIteration/>
                <LifeCycleSample/>
                <div className={ cx('testbox', 'blue') }>
                    <h1>Hi</h1>
                </div>
                <div>
                    <h1>Hello</h1>
                    <SassComponent/>
                </div>
            </div>
        );
    }
}
/* line 20: condition이 거짓이면 && 뒤에 가즈아가 안나온다 */
/* vue가 300라인이라면 react는 500라인 정도는 쳐야 구현이 됨 */
/* split js가 새로 나왔다?, split이 아니고 스벨트 */
/* 프론트는 변화가 빠르다 */
/* 리액트에서도 컴포넌트 만드는게 중요함 */

export default App;
