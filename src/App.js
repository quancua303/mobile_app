import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import { BrowserRouter } from 'react-router-dom';
import RouterURL from './component/RouterURL';

function App() {
    return (
        <BrowserRouter>
            <RouterURL />
            <Footer />
        </BrowserRouter>
    )
}

export default App