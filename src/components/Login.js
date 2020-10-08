import React from 'react';
import Cookies from 'js-cookie'
import './Login.css'
import { Redirect } from 'react-router-dom'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                nombre: '',
                apellido: '',
                cedula: '',
                fecha: '',
                email: '',
                usuarioGithub: '',
                rememberMe: false,
            }
        }
    }
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.form.nombre != null && this.state.form.apellido != null && this.state.form.cedula != null &&
            this.state.form.fecha != null && this.state.form.email != null && this.state.form.usuarioGithub != null) {
            Cookies.set('nombre', this.state.form.nombre);
            Cookies.set('apellido', this.state.form.apellido);
            Cookies.set('cedula', this.state.form.cedula);
            Cookies.set('fecha', this.state.form.fecha);
            Cookies.set('email', this.state.form.email);
            Cookies.set('usuarioGithub', this.state.form.usuarioGithub)
            this.setState({ auth: true })
            this.props.history.push('/home')
        }
        else {
            alert('Ingrese todos los campos')  
        }
    }
    render() {
        return (
            <div className="login-component">
                {Cookies.get('nombre') ?
                    <Redirect to="/home"/>
                    :<Redirect to="/"/>
                    }
                <div className="container mx-auto d-block">
                    <h1 className="ml-5">Bienvenidos</h1>
                    <div className="row">
                        <div className="card justify-content-center ml-5 mr-5 pr-5 pl-5 mb-2 pb-2 caja-form ">
                            <form className="form-group">                              
                                    <label >Name</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        name="nombre"
                                        placeholder="Ingrese nombre"
                                        onChange={this.handleChange}
                                        value={this.state.nombre}
                                        required>
                                    </input>
                                    <label >Apellido</label>
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
                                    <label>Cedula</label>
                                    <input
                                        type="text" 
                                        id="onlyNumbers"
                                        name="cedula"
                                        placeholder="Ingrese numero de cedula"
                                        onChange={this.handleChange}
                                        className="form-control textfield"
                                        value={this.state.cedula}

                                        required
                                    ></input>
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
                                    <label>Usuario de Github</label>
                                    <input
                                        type="text"
                                        name="usuarioGithub"
                                        placeholder="Ingrese usuario de Github"
                                        onChange={this.handleChange}
                                        className="form-control "
                                        value={this.state.usuarioGithub}
                                        required
                                    ></input>
                                <button 
                                  className="btn btn-primary btn mt-3"                               
                                  type="submit"
                                  onClick={this.handleSubmit}
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
