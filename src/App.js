import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store';
import TodoListComponent   from './components/TodoListComponent';

function App() {
  return (
    <div id="App">
       <Provider store={store}>
          <TodoListComponent></TodoListComponent>
       </Provider>
    </div>
  );
}

export default App;
