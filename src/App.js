import React from "react"; 

import {Footer, Blog, Feature, Chatgpt, Header} from './containers'
import { Article,Brand,CTA,Feature,Navbar } from './components'

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">  
            <Navbar/> 
            <Header/>
        </div>
        <Brand/>
        <Chatgpt/> 
        <Feature/> 
        <CTA/> 
        <Footer/> 
        </div>
    )
}

export default App; 
