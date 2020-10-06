import React from 'react'
import styles, { css } from 'styled-components'

const sizes = {
    desktop: 1024,
    tablet: 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});

const Box = styles.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
`;

const Button = styles.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props => props.inverted && css`
        background: none;
        border: 2px solid white;
        color: while;
        &:hover {
            background: while;
            color: black;
        }
    `};
    & + button {
        margin-left: 1rem;
    }
`;

// 유지보수 관점에서 Sass보다
// js와 css 모듈을 같이 써서 구현하는게 낫다. 아니면 StyledComponent 방식
const StyledComponent = () => (
    <Box color="#B9EBA7">
        <Button>안녕!</Button>
        <Button inverted={true}>테두리!!</Button>
    </Box>
)

export default StyledComponent