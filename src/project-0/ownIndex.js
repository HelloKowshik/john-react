import React from 'react';
import ReactDom from 'react-dom';
import BookList from './project-0/BookList';
import './index.css';

function Greeting() {
  return <BookList />;
}

ReactDom.render(<Greeting />, document.getElementById('root'));
