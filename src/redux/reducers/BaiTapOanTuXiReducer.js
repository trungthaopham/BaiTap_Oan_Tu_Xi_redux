
const stateDefault ={
    mangDatCuoc:[
        {ma:'keo',hinhAnh:'./images/keo.png',datCuoc:false},
        {ma:'bua',hinhAnh:'./images/bua.png',datCuoc:true},
        {ma:'bao',hinhAnh:'./images/bao.png',datCuoc:false},
    ],
    ketQua: 'Supper Win',
    soBanThang: 0,
    soBanChoi:0,
    computer:{ma:'keo',hinhAnh:'./images/keo.png'},
}

const BaiTapOanTuXiReducer = (state = stateDefault,action)=>{
    switch(action.type){
        case 'CHON':{
            // console.log(action);
            // reset mang
            let mangUpdate = [...state.mangDatCuoc];
            mangUpdate = mangUpdate.map((item,index)=>{
                if(item.ma===action.maCuoc){
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            state.mangDatCuoc = mangUpdate;
            return {...state}
        }
        case 'RANDOM':{
            // console.log('random',action);
            let soNgauNhien = Math.floor(Math.random()*3);
            let cuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = cuocNgauNhien;
            return{...state}
        }
        case 'END':{
            let player = state.mangDatCuoc.find(item=>item.datCuoc===true);
            let computer = state.computer;
            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Hòa nhau nek!!!';
                    } else if (computer.ma === 'bua'){
                        state.ketQua = 'You lost -_-';
                    } else{
                        state.ketQua = 'You win ^_^';
                        state.soBanThang +=1;
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'You win ^_^';
                        state.soBanThang +=1;

                    } else if (computer.ma === 'bua'){
                        state.ketQua = 'Hòa nhau nek!!!';
                    } else{
                        state.ketQua = 'You lost -_-';}
                    break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'You lost -_-';
                        
                    } else if (computer.ma === 'bua'){
                        state.ketQua = 'You win ^_^';
                        state.soBanThang +=1;
                    } else{
                        state.ketQua = 'Hòa nhau nek!!!';}                    
                    break;
            }
            state.soBanChoi +=1;
            return{...state}
        }
    }
    return {...state};
}
export default BaiTapOanTuXiReducer;
