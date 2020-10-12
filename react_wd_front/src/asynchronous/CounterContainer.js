import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from "./Counter";
import { increaseAsync, decreaseAsync } from "./counter";

// mutax를 표현?
const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return(
        <Counter number={ number } onIncrease={ increaseAsync } onDecrease={ decreaseAsync }/>
    )
}

// 리액트에서는 로컬로 관리를 해야 하는건 변함이 없다.
// Vue에서는 mutation 쪽에서 자동으로 처리해주는 부분이다.
export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
) (CounterContainer)