// import React,{Component} from 'react';

export default function ShowInfo(props){
    
    // render(){
        // console.log(this.props.usuario)
        return(
            <>
                <tr key={props.usuario.nombre}>
                    <td>{props.usuario.nombre}</td>
                    <td>{props.usuario.apellido}</td>
                    <td>{props.usuario.fechaNacimiento}</td>
                    <td>{props.usuario.pais}</td>
                </tr>
            </>
        );
    // }
}