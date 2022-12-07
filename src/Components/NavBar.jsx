import React from 'react';
import {NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={'/'} >Mundo Libre</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to={'/'} aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/genre/Novela Histórica'} >Novela Histórica</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/genre/Distopía'} >Distopía</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/genre/Ficción'} >Ficción</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Título" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                    <div>
                        <div className="col me-5 d-flex align-items-center justify-content-end">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar