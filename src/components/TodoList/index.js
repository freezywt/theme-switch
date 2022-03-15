import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    background: ${(props) => props.theme.theme.background};
    color: ${(props) => props.theme.theme.color};
    font-family: sans-serif;
    font-size: 18px;

    li {
        line-height: 36px;
    }
`;

function TodoList() {
  return (
    <List>
      <li>Make a coffe</li>
      <li>Join in webtristes community</li>
      <li>Study react js</li>
    </List>
  );
}

export default TodoList;
