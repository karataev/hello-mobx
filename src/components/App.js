import React from 'react';
import {observer, inject} from 'mobx-react';


const Display = observer(
  ['store'],
  class Display extends React.Component {

    render() {
      const {todos} = this.props.store;
      return (
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      )
    }
  }
);

const Input = observer(
  ['store'],
  class Input extends React.Component {

    onSubmit = e => {
      e.preventDefault();
      this.props.store.onSubmit(this.input.value);
      this.input.value = '';
    };

    render() {
      return (
        <form
          onSubmit={this.onSubmit}
        >
          <input type="text" ref={x => this.input = x}/>
        </form>
      )
    }
  }
);


class App extends React.Component {

  render() {
    return (
      <div>
        <Display/>
        <Input/>
      </div>
    )
  }
}

export default observer(App);

