import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className="text-center player">
                <div className="thinking">
                <img src="./images/bua.png"/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 250, height: 250 }} src="./images/playerComputer.png" alt="player" />
            </div>
        )
    }
}
