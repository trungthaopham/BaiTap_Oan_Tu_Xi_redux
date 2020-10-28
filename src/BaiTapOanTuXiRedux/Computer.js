import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25%{top: 100px;}
            50%{top: -50px;}
            75%{top: 100px;}
            100%{top: 0px;}
            }`
        return (
            <div className="text-center player">
                <style>
                    {keyframe}
                </style>
                <div className="thinking" style={{position:'relative'}}>
                <img src={this.props.computer.hinhAnh} style={{ position:'absolute',animation:`randomItem${Date.now()} 0.5s`,left:'70px'}}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width: 250, height: 250}} src={"./images/playerComputer.png"} alt="player" />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        computer:state.BaiTapOanTuXiReducer.computer
    }
}

const mapDispatchToProps = {
    
}
export default  connect(mapStateToProps)(Computer)
