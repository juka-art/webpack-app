import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Header} from './layouts/header/header';
import {Content} from './layouts/content/content';
import {Footer} from './layouts/footer/footer';
// import 'reset.css';
import indexCss from './../stylesheets/index.css';

let wait = (time) => {
  return new Promise((resolve, reject)=> setTimeout(resolve, time));
}

wait(3000).then(()=> console.log('wait yo!'));

// import {Header, Content, Footer} from './layouts';

export class App extends React.Component {
  render () {
    return (
      <div className={indexCss.Wrapper}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}
