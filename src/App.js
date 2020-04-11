import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageItem from './components/MessageItem.tsx'


const messageList = [
  {
    title: 'message 1',
    key: '1',
  },
  {
    title: 'message 2',
    key: '2',
  },
  {
    title: 'message 3',
    key: '3',
  },
]

const color = 'red'

class App extends React.PureComponent {

  render() {
    return (
      <div className="App">
        {messageList.map(item => {
          const { key, title } = item
          return (
            <MessageItem key={key}>{title}</MessageItem>
          )
        })}
      </div>
    );
  }
}

App.prototype.getChildContext = () => {
  return {color};
}


App.childContextTypes = {
  color: String,
}

export default App;
