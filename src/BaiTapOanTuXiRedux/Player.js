import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        return (
            <div className="text-center player">
                <div className="thinking player_think">
                    <img src="./images/bua.png"/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 250, height: 250 }} src="./images/player.png" alt="player" />
                <div className="row">
                    <div className="col-4">
                        <button className="btnItem rounded">
                            <img src="./images/bao.png" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem rounded">
                            <img src="./images/bua.png" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem rounded">
                            <img src="./images/keo.png" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
