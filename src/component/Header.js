import React, { useState, useEffect } from 'react'
import Login from './login/Login';
import axios from 'axios';
import { getUser, removeUserSession } from './Common';
import { useHistory } from 'react-router-dom';

const Header = (props) => {

    const user = getUser();
    let account = useState('');

    if (user) {
        account = user.name;
    } else account = "Account";

    const history = useHistory();

    const handleLogout = () => {
        removeUserSession();
        history.push('/');
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a href="/" class="navbar-brand" >Shopping product</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/listProduct">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Introduce</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/drop" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {account}
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="/login" class="dropdown-item">Login</a></li>
                                    {user && <li><a onClick={handleLogout} class="dropdown-item" >Log out</a></li>}
                                    <li><a href="/signup" class="dropdown-item">Create account</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;
