import React from "react";

export default class propiertiesReact extends React.Component {
    render() {
        return (
            <section className="weather-widget" style={{backgroundColor: this.props.bgColor}}>
                <img className="pict" src={this.props.image} /> 
                <h4>{this.props.title}</h4>
                <p className="description">{this.props.description}</p>
            </section>
        )
    }
}