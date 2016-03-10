import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp);
 
let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      <div>
      	<input ref={node => {
      		this.input = node;
      	}} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          }); 
          this.input.value = '';
        }}>
        Add Todo 
        </button>
        <ul>
        	{this.props.todos.map(todo => 
        		<li key={todo.id}>
        			{todo.text}
        		</li>
        	)}
        </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)
