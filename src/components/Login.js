/*Importacion de librerias */
import React from 'react';
import Cookies from 'js-cookie'
import './Login.css'
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nombre: null,
                apellido: null,
                cedula: null,
                fecha: null,
                email: null,
                usuarioGithub: null,
                rememberMe: false,
            }

        };
    }
    /*Funcion que permite almacenar los datos ingresados en las variables */
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    };
    /*Funcion que guarda en cookies la información suministrada por el usuario  y a su vez hace la validación de los datos, que estos no esten vacios*/
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.form.nombre != null && this.state.form.apellido != null && this.state.form.cedula != null &&
            this.state.form.fecha != null && this.state.form.email != null && this.state.form.usuarioGithub != null) {
            Cookies.set('nombre', this.state.form.nombre);
            Cookies.set('apellido', this.state.form.apellido);
            Cookies.set('cedula', this.state.form.cedula);
            Cookies.set('fecha', this.state.form.fecha);
            Cookies.set('email', this.state.form.email);
            Cookies.set('usuarioGithub', this.state.form.usuarioGithub);
            /*Me envia a home, una vez entre al condicional */
            this.setState({ auth: true })
            this.props.history.push('/home');

        }
        else {
            alert('Ingrese todos los campos');    
        }
    }
    render() {
        return (
            <div className="Login-component" style={{ height: '100vh' }}>
                {Cookies.get('nombre') ?
                    <Redirect to="/home" />
                    :
                    <Redirect to="/" />}
                <div className="container mx-auto d-block">
                    <h1 className="ml-5">Bienvenidos</h1>
                    <div className="row">
                        <div className="card justify-content-center ml-5 mr-5 pr-5 pl-5 mb-2 pb-2 caja-form ">
                            <form className="">
                                <div className="form-group">
                                    <label for="validationTooltip01">Name</label>
                                    <input
                                        class="form-control "
                                        id="validationTooltip01"
                                        type="text"
                                        name="nombre"
                                        placeholder="Ingrese nombre"
                                        onChange={this.handleChange}
                                        value={this.state.nombre}
                                        id="validationCustom01"
                                        required>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label for="validationCustom01">Apellido</label>
                                    <input
                                        type="text"
                                        name="apellido"
                                        placeholder="Ingrese nombre"
                                        onChange={this.handleChange}
                                        className="form-control "
                                        value={this.state.apellido}
                                        id="validationCustom01"
                                        required
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Cedula</label>
                                    <input
                                        type="text" class="textfield" value="" id="onlyNumbers" name="onlyNumbers" onkeypress="return isNumber(event)" onpaste="return false;"

                                        name="cedula"
                                        placeholder="Ingrese numero de cedula"
                                        onChange={this.handleChange}
                                        className="form-control "
                                        value={this.state.cedula}

                                        required
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Fecha de nacimiento</label>
                                    <input
                                        type="date"
                                        name="fecha"
                                        placeholder="Ingrese fecha de nacimiento"
                                        onChange={this.handleChange}
                                        className="form-control "
                                        value={this.state.fecha}
                                        id="validationCustom01"
                                        required
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Correo Electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Ingrese correo electrónico"
                                        onChange={this.handleChange}
                                        className="form-control"
                                        value={this.state.form.email}
                                        required
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label for="validationCustom01">Usuario de Github</label>
                                    <input
                                        type="text"
                                        name="usuarioGithub"
                                        placeholder="Ingrese usuario de Github"
                                        onChange={this.handleChange}
                                        className="form-control "
                                        value={this.state.usuarioGithub}
                                        id="validationCustom01"
                                        required
                                    ></input>
                                </div>

                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" type="submit" className="btn btn-primary btn" onClick={this.handleSubmit}
                                >Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )

    }
}
export default Login;
