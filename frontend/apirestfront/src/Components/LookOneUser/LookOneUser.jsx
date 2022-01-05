import React ,{Component} from 'react';

export default class LookOneUser extends Component{
    constructor(props) {
              super(props);
              this.state = {value: ''};
          
              this.handleChange = this.handleChange.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
            }
            
            handleChange(e) {
                this.props.onchan(e.target.value);
                // alert(e.target.value);//debemos quitar el alert
                // ESTE METODO LEVANTA EL ESTADO A MAIN AJAX GET USERS
            }
            
            handleSubmit(event) {//NO NECESITAMOS EL METODO DE SUBMIT
              alert('A name was submitted: ' + this.state.value);
              event.preventDefault();              
            }            

    render(){
        return(
            <>
                    <label htmlFor="searchUser">Nombre de Usuario a Buscar: </label>
                    <input type="text" name="searchUser" id="searchUser" value={this.props.search} onChange={this.handleChange}/><br /><br />
            </>
        );
    }
}