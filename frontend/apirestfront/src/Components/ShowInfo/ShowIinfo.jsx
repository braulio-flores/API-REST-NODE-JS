import React,{Component} from 'react';

export default class ShowInfo extends Component{

    constructor(props){
        super(props);

        // this.state = {
        //     usuarios:[],
        //     updateAdd:'1',
        //     userToModify:[]
        // };

        this.modifyThis = this.modifyThis.bind(this);
    }

    modifyThis(e) {
        this.props.oncli(e.target.value);
        // alert(e.target.value);//debemos quitar el alert
        // ESTE METODO LEVANTA EL ESTADO A MAIN AJAX GET USERS
    }
    
    render(){
        // console.log(this.props.usuario)
        return(
            <>
                <tr key={this.props.usuario.nombre}>
                    <td>{this.props.usuario.nombre}</td>
                    <td>{this.props.usuario.apellido}</td>
                    <td>{this.props.usuario.fechaNacimiento}</td>
                    <td>{this.props.usuario.pais}</td>
                    <td><button value={this.props.id} onClick={this.modifyThis}>Actualizar</button></td>
                </tr>
            </>
        );
    }
}