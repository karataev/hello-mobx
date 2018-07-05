import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App";
import {observable, decorate, computed} from "mobx";
import {Provider} from 'mobx-react';

class AppState {
  todos = ['get milk'];
  onSubmit = e => this.todos.push(e);
}

decorate(AppState, {
  todos: observable,
});

const appState = new AppState();

ReactDOM.render((
  <Provider store={appState}>
    <App/>
  </Provider>
), document.getElementById('mount'));
