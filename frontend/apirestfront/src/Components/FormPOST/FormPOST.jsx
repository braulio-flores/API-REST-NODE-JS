// import {styles} from './Form.css';
import React from "react";

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nombre:'',
        apellido:'',
        fechaNacimiento:'',
        pais:'' 
      };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(e) {        
      this.setState({
        nombre: document.getElementById('inputName').value,
        apellido: document.getElementById('inputApellido').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        pais: document.getElementById('inputPais').value,
      });
    }

    handleChange(event) {
      // this.setState({vanombrelue: event.target.value});
    }
  
    handleSubmit(event) {
      // console.log(this.state);
      this.props.onchan(this.state);
      event.preventDefault();
      // this.props.onchan(usuario);      
    }
  
    render() {
      return (
        <>
          <h2>Agregar Usuario</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="inputName">Nombre: </label>
            <input type="text" id="inputName" value={this.state.nombre} onChange={this.handleChangeName}/><br /><br />
            <label htmlFor="inputApellido">Apellido: </label>
            <input type="text" id="inputApellido" value={this.state.apellido} onChange={this.handleChangeName} /><br /><br />
            <label htmlFor="fechaNacimiento">Fecha De Nacimiento: </label>
            <input type="date" id="fechaNacimiento" value={this.state.fechaNacimiento} onChange={this.handleChangeName} />   <br /><br />
            <label htmlFor="inputPais">Pais: </label>    
            <select id="inputPais" value={this.state.pais} onChange={this.handleChangeName} >
              <option value="Mexico">Mexico</option>
              <option value="EUA">EUA</option>
              <option value="Honduras">Honduras</option>
            </select>    <br /><br />
          <input type="submit" value="Submit" />
          <h1>{this.props.usuarios}</h1>
        </form>
        </>        
      );
    }
  }
  
