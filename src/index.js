import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsItems = [
    {id: 1, name: 'Rasim'}, 
    {id: 2, name: 'Dima'}, 
    {id: 3, name: 'Andrey'}, 
    {id: 4, name: 'Victor'}, 
    {id: 4, name: 'Elena'}, 
  ]
const messagesData = [
    {id: 1, message: 'Hi'}, 
    {id: 2, message: 'how are you'}, 
    {id: 3, message: 'goodbay'}, 
    {id: 4, message: 'fdsfdsf'}, 
  ]
const postsData = [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 5},
    {id: 2, message: "Я изучаю react", likesCount: 5},
    {id: 2, message: "У меня получается!", likesCount: 5}
  ]

ReactDOM.render(
  <React.StrictMode>
    <App  dialogsItems={dialogsItems} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
