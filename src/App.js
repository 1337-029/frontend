import './App.css';
import MainContainer from "./components/containers/MainContainer";
import {color} from "./styles/globals";
import React from "react";

function App() {
    const style = {
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: color.background,
        display: "flex",
        justifyContent: "center",
    }

    return (
        <div className="App" style={style}>
            <MainContainer/>
        </div>
    );
}

export default App;
