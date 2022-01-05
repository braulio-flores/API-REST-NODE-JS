import React, {Component} from 'react';
import axios from 'axios';
import FormPOST from '../FormPOST/FormPOST';
import ShowInfo from '../ShowInfo/ShowIinfo';
import TableInfo from '../TableInfo/TableIinfo';
import LookOneUser from '../LookOneUser/LookOneUser';

export default class MainAJAXGetUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuarios:[],
            busqueda:''
        };
          
        this.filtrarUsuarios = this.filtrarUsuarios.bind(this);
        this.addUsuario = this.addUsuario.bind(this);
    }

    componentDidMount(){
        let url = "http://localhost:8888/usuarios";
        axios({
            method:'GET',
            url:url,
            responseType:'json'
        }).then(res=>{
            let newUsers = this.state.usuarios;
            
            res.data.map((item,i)=>{
                
                newUsers.push(item);
                return({sucess:1});
                
            })
            this.setState({
                usuarios: newUsers
            });
            console.log(this.state.usuarios);
        }).catch(error=>{
            console.error(error);
        });
    }

    filtrarUsuarios(busqueda){
        // alert(this.state.filter);
        // this.setState({busqueda:busqueda});
        // POR EL MOMENTO DEJAREMOS EL ESTADO DEL FILTRO PERO EN REALIDAD NO ES NECESARIO
        let url = `http://localhost:8888/usuarios/${busqueda}`;
        axios({
            method:'GET',
            url:url,
            responseType:'json'
        }).then(res=>{
            // let newUsers = this.state.usuarios;
            
            // res.data.map((item,i)=>{
                
            //     newUsers.push(item);
            //     return({sucess:1});
                
            // })
            // this.setState({
            //     usuarios: newUsers
            // });
            console.log(res.data);
            this.setState({usuarios:res.data});
            console.log(this.state.usuarios);
        }).catch(error=>{
            console.error(error);
        });
        // alert(this.state.filter);
    }

    addUsuario(usuario){
        let url = `http://localhost:8888/usuarios`;
        axios({
            method:'POST',
            url:url,
            responseType:'json',
            data:usuario
        }).then(res=>{
            // console.log(res.data);
            let addUsr = this.state.usuarios;
            addUsr.push(usuario);
            this.setState({usuarios:addUsr});
            // this.setState({usuarios:res.data});
            // console.log(this.state.usuarios);
        }).catch(error=>{
            console.error(error);
        });
    }

    render(){
        return(
            <>
                <h2>OBTENER USUARIOS EN EL ARRAY</h2>
                <LookOneUser onchan={this.filtrarUsuarios} search={this.state.filter}/>
                <TableInfo>
                    {this.state.usuarios.map((item,i)=>{
                        return(
                                <ShowInfo usuario={item} key={i}/>  
                        );
                    })}
                </TableInfo>
                <br></br>
                <br />
                <FormPOST onchan={this.addUsuario}/>
            </>           
        )
    }
}

