import React from 'react';
import {NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={'/'} ><img src="../images/ML-green.png" alt="Logo Mundo Libre" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to={'/'} aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to={'/genre/'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Género</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/genre/Cocina'}>Cocina </Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Distopía'}>Distopía</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Ficción'}>Ficción</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Filosofía'}>Filosofía</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Historia'}>Historia</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Infantil'}>Infantil</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Música'}>Música</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Novela'}>Novela</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Novela Clásica'}>Novela Clásica</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Novela Histórica'}>Novela Histórica</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Romance'}>Romance</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to={'/author/'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Autor</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/author/Anne Rice'}>Anne Rice</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Darío Sztajnszrajber'}>Darío Sztajnszrajber</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Franz Kafka'}>Franz Kafka</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Felipe Pigna'}>Felipe Pigna</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/George Orwell'}>George Orwell</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/George R.R. Martin'}>George R.R. Martin</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Ildefonso Falcones'}>Ildefonso Falcones </Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Julia Navarro'}>Julia Navarro</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Ken Follett'}>Ken Follett</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Khaled Hosseini'}>Khaled Hosseini</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Paulina Cocina'}>Paulina Cocina</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Ray Bradbury'}>Ray Bradbury</Link></li>
                                    <li><Link className="dropdown-item" to={'/author/Suzanne Collins'}>Suzanne Collins</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/language/Inglés'} >Inglés</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control m-1" type="search" placeholder="Título" aria-label="Search" />
                            <button className="btn" type="submit"><i class="bi bi-search"></i></button>
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