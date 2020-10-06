import React from 'react'
import styles from './CMTest.module.css'

// 유지보수 관점에서 Sass보다
// js와 css 모듈을 같이 써서 구현하는게 낫다.
const CMTest = () => {
    return (
        <div className={ `${styles.wrapper} ${styles.inverted}` }>
            안녕, 나는 <span className="something">CSS Module 입니다!</span>
        </div>
    )
}

export default CMTest