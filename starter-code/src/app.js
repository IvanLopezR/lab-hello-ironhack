import React, { Component } from "react";
import NavbarReact from "./navbarReact";
import SayHello from "./sayHello";
import PropertiesReact from "./propiertiesReact"
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.colProper = [{
            image: "./images/icon1.png",
            title: "Declarative",
            description: "React make it painless to create interactive UIs"
          },
          {
            image: "./images/icon2.png",
            title: "Components",
            description: "Build encapsulated components that manage their state."
          },
          {
            image: "./images/icon3.png",
            title: "Single-Way",
            description: "A set of immutable values are passed to the component's."
          },
          {
            image: "./images/icon4.png",
            title: "JSX",
            description: "Statically-typed, designed to run on modern browsers."
          },
        ];
    }

    render() {
        return (
            <div>
                <div className="principalSection">
                    <NavbarReact />
                    <SayHello />
                </div>
                <div className="container">
                    {this.colProper.map(feature => <PropertiesReact image={feature.image} title={feature.title} description={feature.description}></PropertiesReact>)}
                </div>
            </div>
        )
    }
}


export default App;