
let initialState={
  msd : [
    { id: 1, message: "hello world!!!" },
    { id: 2, message: "itKamasutra" }
  ],
     dgd : [
    { id: 1, name: "React" },
    { id: 5, name: "Билл Гейтс" }
  ]
}


const dialogsReducer = (state=initialState, action) =>{
     switch (action.type){
       case "ADD_MESSAGE":
        let newMessage = {id: state.msd.length+1,
          message: action.message};
          return {...state,                       
                  msd:[...state.msd, newMessage]};
      default:
    return state;}
}

//ActionCreators////////////////////////

  export  let addMessage = (message) =>{
    return{type:"ADD_MESSAGE", message}
  };

export default dialogsReducer;
