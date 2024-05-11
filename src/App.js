import React from "react"; 

import {Footer, Blog, Header} from './containers'
import {Brand, Feature, Navbar, CTA } from "./components";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar/> 
                <Header/> 
            </div>
                <Brand/> 
                <Feature/> 
                <CTA/> 
                <Blog/> 
                <Footer/> 

        </div>
    )
}

export default App; 
