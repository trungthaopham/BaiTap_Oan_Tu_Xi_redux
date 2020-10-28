import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        // console.log(this.props.mangDatCuoc);
        return (
            <div className="text-center player">
                <div className="thinking player_think">
                    <img src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 250, height: 250 }} src="./images/player.png" alt="player" />
                <div className="row">

                    {this.props.mangDatCuoc.map((item, index) => {

                        let border = {};
                        if(item.datCuoc){
                            border={border:'3px solid orange'}
                        }

                        return <div className="col-4" key={index} >
                            <button style={border} className="btnItem rounded" onClick={()=>{
                                this.props.datCuoc(item.ma)
                            }}>
                                <img src={item.hinhAnh} />
                            </button>
                        </div>
                    })}



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

const mapDispatchToProps = dispatch=>{
    return {
        datCuoc: (maCuoc)=>{
            dispatch({
                type: 'CHON',
                maCuoc,
            })
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
