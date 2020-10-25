
const stateDefault ={
    mangDatCuoc:[
        {ma:'keo',hinhAnh:'./assets/images/keo.png',datCuoc:true},
        {ma:'bua',hinhAnh:'./assets/images/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./assets/images/bao.png',datCuoc:false},
    ],
    ketQua: 'Win',
    soBanThang: 0,
    soBanChoi:0,
    computer:{ma:'keo',hinhAnh:'./assets/images/keo.png'},
}

const BaiTapOanTuXiReducer = (state = stateDefault,action)=>{
    
    return {...state};
}
export default BaiTapOanTuXiReducer;
