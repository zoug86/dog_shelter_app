import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/dogs' >DoggApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to={`/dogs`} className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            {this.props.dogs.map(dog => (
                                <li className="nav-item" key={dog.name}>
                                    <NavLink exact to={`/dogs/${dog.name}`} className="nav-link" aria-current="page">{dog.name}</NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav >
        )
    }
}

export default Navbar;