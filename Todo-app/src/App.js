import React, { Component } from "react";
import "./App.css";
import shortid from "shortid";
class App extends Component {
  state = {
    item: "",
    text: "",
    todo: [],
    done: [],
    searchlst: [],
  };

  update(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addtodo() {
    const item = {
      id: shortid.generate(),
      value: this.state.item.slice(),
    };
    const todo = [...this.state.todo];
    todo.push(item);
    this.setState({
      todo,
      item: "",
    });
  }

  search = (e) => {
    console.log(e);
    let searchlst = this.state.todo.filter((name) =>
      name.value.toLowerCase().includes(e.toLowerCase())
    );
    if(e!==""){
    this.setState({
      searchlst,
    });
    }
    else{
      searchlst=[]
      this.setState({
      searchlst,
    });
    }
  };

  delete(id) {
    const todo = [...this.state.todo];
    const updatedList = todo.filter((item) => item.id !== id);
    this.setState({ todo: updatedList });
  }

  print(id) {
    const todo = [...this.state.todo];
    const done = [...this.state.done];
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id === id) {
        const item = {
          id: todo[i].id,
          value: todo[i].value,
        };
        done.push(item);
      }
    }
    this.setState({
      done,
    });
    console.log(done);
  }

  render() {
    return (
      <div>
        <h1 className="main">Todo App</h1>

        <h1>Active</h1>
        <input
          type="text"
          placeholder="Enter a Todo"
          value={this.state.item}
          onChange={(example) => this.update("item", example.target.value)}
        />
        <button className="add" onClick={() => this.addtodo()}>
          Add
        </button>
        <ul>
          {this.state.todo.map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.value}</h3>
                <button
                  className="delete"
                  onClick={() => {
                    this.delete(item.id);
                    this.print(item.id);
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>

        <h1>Completed</h1>
        <ul>
          {this.state.done.map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.value}</h3>
              </li>
            );
          })}
        </ul>

        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search for a Todo"
          value={this.state.text}
          onChange={(example) => {
            this.search(example.target.value);
            this.update("text", example.target.value);
          }}
        />

        <ul>
          {this.state.searchlst.map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.value}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
