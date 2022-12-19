import { NavLink, Link } from 'react-router-dom';
import CartWidget from './Cart/CartWidget';


export const NavBar = () => {
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
                                <NavLink className="nav-link" to={'/'} aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to={'/genre/'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Castellano</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/genre/Cocina'}>Cocina </Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Distopía'}>Distopía</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Ficción'}>Ficción</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Filosofía'}>Filosofía</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Historia'}>Historia</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Infantil'}>Infantil</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Música'}>Música</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Novela'}>Novela</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Novela Histórica'}>Novela Histórica</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Romance'}>Romance</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to={'/genre/'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inglés</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/genre/Distopy'}>Distopy</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Fiction'}>Fiction</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Music'}>Music</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Novel'}>Novel</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Historical Novel'}>Historical Novel</Link></li>
                                    <li><Link className="dropdown-item" to={'/genre/Romance Novel'}>Romance Novel</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to={'/saga/'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Colecciones</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/saga/El jinete de Bronce'}>El Jinete de Bronce - Paullina Simons</Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/El Siglo'}>El Siglo - Ken Follet</Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/Harry Potter'}>Harry Potter - J.K.Rowling</Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/Juego de Tronos'}>Juego de Tronos - G.R.R.Martin</Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/Juegos del hambre'}>Juegos del Hambre - Suzanne Collins</Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/Kingsbridge'}>Kingsbridge - Ken Follet</Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/La Catedral del Mar'}>La Catedral del Mar - I. Falcones</Link></li>
                                    <li><p className="dropdown-divider"></p></li>
                                    <li><Link className="dropdown-item" to={'/saga/Game of Thrones'}>Game of Thrones - G.R.R.Martin </Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/The Century'}>The Century - Ken Follet</Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/The Hunger Games'}>The Hunger Games - Suzanne Collins </Link></li>
                                    <li><Link className="dropdown-item" to={'/saga/The Vampire Chronicles'}>The Vampire Chronicles - Anne Rice</Link></li>
                                </ul>
                            </li>
                        </ul>                       
                        <div>
                           
                        </div>              
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