import React, {Component} from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput:'',
            items: []
        };
    }
    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        }); 

    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item}  
                </div>
            );
        });
    }


    render(){
        return(
            <div>
            <h1>TO DO LIST <span>✅</span></h1>
            <form>
            
            <input 
                value={this.state.userInput} 
                type="text" placeholder="tache"
                onChange={this.onChange.bind(this)}
            />
            <button onclick={this.addTodo.bind(this)} >Ajouter</button>
            </form>
             <div>
                {this.renderTodos()}
             </div>
            </div>
            );
    }
}

export default TodoList;