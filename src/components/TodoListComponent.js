import React, { Component } from 'react';
import { Creators as TodoActions }  from '../store/ducks/todos';
import { connect } from 'react-redux';

class TodoListComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Vou adicionar', this.input.value);
        this.props.dispatch(TodoActions.addTodo(this.input.value));
        //this.input.value = "";
    }

    handleToggle = (id) => {
        this.props.dispatch(TodoActions.toggleTodo(id));
    }

    handleRemove = (id) => {
        this.props.dispatch(TodoActions.removeTodo(id));
    }

    render() {
        const { todos, toggleTodo, removeTodo} = this.props;
        console.log('Todos',todos);

        return(<section>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="add your task" ref={ el => (this.input = el) }/>
                <button type="submit">Novo</button>
            </form>
            <ul>
                {todos.map(todo =>(
                    <li key={todo.id}>
                        {todo.complete ? <s>{todo.text}</s> : todo.text  }
                        <div>
                            <button onClick={ () => this.handleToggle(todo.id) }>Toggle</button>
                            <button onClick={ () => this.handleRemove(todo.id) }>Remove </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>)
    }
}

export default connect(state => ({
    todos: state.todos
}))(TodoListComponent);