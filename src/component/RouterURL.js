// JavaScript source code
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import UnderHeader from './UnderHeader';
import Login from "./login/Login";
import SignUp from "./SignUp";
import ListProduct from "./ListProduct";
import Admin from "./Admin";
import AddProduct from "./AddProduct";

import axios from 'axios';
import { useState, useEffect } from "react";
import { getToken, removeUserSession, setUserSession } from "./Common";



function RouterURL() {
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            return;
        }

        axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(
            res => {
                setUserSession(res.data.token, res.data.user);
                setAuthLoading(false);
            }
        ).catch(err => {
            removeUserSession();
            setAuthLoading(false);
        })
    }, []);

    if (authLoading && getToken()) {
        return <div className="">Checking Authentication ...</div>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={UnderHeader} />
                    <Route path='/detail/:id' component={Detail} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/listProduct' component={ListProduct} />
                    <Route path='/admin' component={Admin} />
                    <Route path='/addProduct' component={AddProduct} />
                </Switch>
            </div>
        </Router>
    )
}

export default RouterURL