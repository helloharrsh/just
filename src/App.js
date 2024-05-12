import React from "react"; 

import {Footer, Blog, Header} from './containers'
import {Brand, Navbar, CTA } from "./components";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar/> 
                <Header/> 
            </div>
                <Brand/> 
                <CTA/> 
                <Blog/> 
                <Footer/> 

        </div>
    )
}

export default App; 
