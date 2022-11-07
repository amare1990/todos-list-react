import React from "react"

class TodoItem extends React.Component {

  state = {
    editing: false
  }

  handleEditing = () => {
    this.setState({
      editing: true
    })
  } 

  handleUpdatedDone = (event) => {
    if (event.key === "Enter" ) {
      this.setState({ editing: false });
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }
    
  render() {

    const { completed, id, title } = this.props.todo
    
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li>
        <div onDoubleClick={this.handleEditing}>
          <input 
            type="checkbox" 
            checked={completed}  
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span>{title}</span>
        </div>
        <input 
          type="text" 
          value={title} 
          onChange={(e)=> {this.props.setUpdate(e.target.value, id)}}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    )
  }
}

export default TodoItem