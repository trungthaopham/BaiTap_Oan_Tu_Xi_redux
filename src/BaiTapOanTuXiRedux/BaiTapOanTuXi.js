import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
class BaiTapOanTuXi extends Component {
    render() {
        
        return (
            <div className="gameOanTuXi" style={{backgroundImage:'url(./images/bgGame.png)'}}>
                
                <div className="row text-center mt-5">
                    <div className="col-4 p-2">
                        <Player/>
                    </div>
                    <div className="col-4 p-2">
                        <KetQuaTroChoi/>
                        <button className="btn btn-success p-3 mt-5" onClick={()=>{this.props.playGame()}}>Play game</button>
                    </div>
                    <div className="col-4 p-2">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        playGame:()=>{
            // lap lai
            let count = 0;
            let randomComputer = setInterval(()=>{
                dispatch({
                    type: 'RANDOM'
                })
                count ++;
                if(count > 15){
                    clearInterval(randomComputer)
                    dispatch({
                        type:'END'
                    })
                }
            },100)
        }
    }
}

export default connect (null,mapDispatchToProps)(BaiTapOanTuXi)