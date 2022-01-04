import React, {Component} from 'react';
import axios from 'axios';

function Usuarios(props){
    return(
        <h3>props.nombre</h3>
    );
}

export default class AjaxPeticiones extends Component{
    state = {
        usuarios:[]
    }

    componentDidMount(){
        let url = "http://localhost:8888/usuarios";
        axios({
            method:'GET',
            url:url,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
                },
            responseType:'json'
        }).then(res=>{
            console.log(res);
            // this.usuarios = res.data;
            // console.log(this.usuarios);
            // llenarTabla();
        }).catch(error=>{
            console.error(error);
        });
    }

    render(){
        return(
            <>
                <h2>Ajax Peticiones Fetch</h2>
            </>           
        )
    }
}