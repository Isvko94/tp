import {Component} from "react";


export default class Form extends Component {
    
    render(){
        return (<form>
            <input type="text" placeholder="TITRE"></input>
            <input type="text" placeholder="tache"></input>
            <button>Ajouter</button>
        </form>
        )
    }

}