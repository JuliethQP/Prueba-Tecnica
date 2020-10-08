import React from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import './Login.css'
import {Redirect } from "react-router-dom";
import Icon from './Imagenes/icons8-github-512.png'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nombre: Cookies.get('nombre'),
                apellido: null,
                cedula: null,
                fecha: null,
                email: null,
                usuarioGithub: null,

            },
            posts: [], 
        }
    }
    handleLogout = (e) => {
        e.preventDefault();
        Cookies.remove('nombre')
        Cookies.remove('apellido')
        Cookies.remove('cedula')
        Cookies.remove('cedula')
        Cookies.remove('fecha')
        Cookies.remove('email')
        Cookies.remove('usuarioGithub')
        this.props.history.push('/')

    }
    componentDidMount() {
        const nombreApi = Cookies.get('usuarioGithub')
        if (nombreApi != null) {
            const URL = `https://api.github.com/users/${nombreApi}/repos`
            axios.get(URL)
                .then(res => {
                    const posts = res.data
                    this.setState({ posts })
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            alert("No hay DATOS de usuario de Github")
            window.location = '/';
        }
    }
    render() {
        const columns = [
            {
                Header: "Nombre ",
                accessor: "name",
                sortable: true,
            },
            {
                Header: "Descripcion ",
                accessor: "description",
            },
            {
                Header: " url git",
                accessor: "html_url"
            },
            {
                Header: " Lenguaje",
                accessor: "language"
            },
            {
                Header: "branch default",
                accessor: "default_branch"
            }
        ]
        return (
            <>               
              <div>
                    {Cookies.get('nombre') ?
                        <Redirect to="/home"/>
                        :
                        <Redirect to="/" />
                    }
                    <header>
                        <div className="container w-50">
                            <div className="row   mb-1 ">
                                <div className="mt-1 mb-1 d-flex justify-content-start mx-2">
                                    <i><img src={Icon} width="50" alt="icon"></img> </i> <h2>Repositorios</h2>
                                </div>
                                <div className="mx-2 mt-1 mb-1 d-flex justify-content-end">
                                    <button className="btn btn-primary btn" onClick={this.handleLogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section>
                        <div className=" card w-50 text-start container">
                            <p className="subtitle has-text-centered"><strong>Nombre y apellido: </strong>  {Cookies.get('nombre')} {Cookies.get('apellido')}</p>                         
                            <p className="subtitle has-text-centered"><strong>Cédula: </strong>{Cookies.get('cedula')}</p>   
                            <p className="subtitle has-text-centered"><strong>Fecha de Nacimiento: </strong>{Cookies.get('fecha')} </p>
                            <p className="subtitle has-text-centered"> <strong>Correo: </strong>{Cookies.get('email')}</p>
                            <p className="subtitle has-text-centered"><strong>Usario de Github: </strong>{Cookies.get('usuarioGithub')}</p>
                        </div>
                    </section>
                    <hr/>
                    <section>
                        <div className="container ">
                            <p className="text-align center"> <strong>Características de los repositorio</strong></p>
                            <ReactTable
                                style={{height: '100vh'}}
                                columns={columns}
                                data={this.state.posts}
                                filterable
                                defaultPageSize={5}
                                className="-striped -highlight"
                                showPaginationTop={true}
                                showFilters
                                noDataText={"Esperar porfavor, o ingresa tus datos nuevamente"}
                            />
                        </div>
                    </section>
                     <footer >
                        <div style={{ backgroundColor: 'pink' }}>
                            <div className="row mr-1 ml-1  justify-content-center">
                                <i><img src={Icon} width="50" alt="icon"></img> </i> <h2 className="text-center">Conoce los repositorios de github</h2>
                            </div>
                        </div>
                    </footer>               
                </div>        
            </>
        )
    }
}
export default Home

