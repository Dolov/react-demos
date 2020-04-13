import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/index'

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <React.StrictMode>
      <App store={state}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render)
store.subscribe(() => {
  console.log('订阅者发布者')
})

render()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
