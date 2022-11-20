import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <div className="col me-5 d-flex align-items-center justify-content-end">
                <CartWidget />
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand" href='#' >Mundo Libre</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Recomendados</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Género
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" >Action</a></li>
                                    <li><a className="dropdown-item" >Another action</a></li>
                                    <li><a className="dropdown-item" >Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Autor
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" >Action</a></li>
                                    <li><a className="dropdown-item" >Another action</a></li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Título" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar