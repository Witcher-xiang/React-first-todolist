import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList'

// <App />这中写法被称为jsx

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoList />, document.getElementById('todoList'));
// 这里是指挂载到id=root这个文件下 这个root在public目录下的文件



