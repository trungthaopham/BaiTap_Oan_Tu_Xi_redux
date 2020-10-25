import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
export default class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4 p-2">
                        <Player/>
                    </div>
                    <div className="col-4 p-2">
                        <KetQuaTroChoi/>
                        <button className="btn btn-success p-3 mt-5">Play game</button>
                    </div>
                    <div className="col-4 p-2">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}
