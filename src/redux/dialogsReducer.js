
let initialState={
  msd : [
    { id: 1, message: "Отстань не дам!!!" },
    { id: 2, message: "Мяу люблю тебя больше чем маму. мама фуу" },
    { id: 3, message: "йоу фэйс и фараон топчик" },
    { id: 4, message: "люблю стритсы" },
    { id: 5, message: "Псс.. Парень! Денег надо?!" }
  ],
     dgd : [
    { id: 1, name: "Олька" },
    { id: 2, name: "Доча" },
    { id: 3, name: "Фаршмаки" },
    { id: 4, name: "Потрасмайкер" },
    { id: 5, name: "Билл Гейтс" }
  ]
}


const dialogsReducer = (state=initialState, action) =>{
     switch (action.type){
       case "ADD_MESSAGE":
        let newMessage = {id: state.msd.length+1,
          message: action.message};
          return {...state,                       //возвращаем сразу объект
                  msd:[...state.msd, newMessage]};
      default:
    return state;}
}

//ActionCreators////////////////////////

  export  let addMessage = (message) =>{
    return{type:"ADD_MESSAGE", message}
  };

export default dialogsReducer;

























/* const dialogsReducer = (state=initialState, action) =>{
  switch (action.type){
    case "addMessage":{
     let newMessage = {id: state.msd.length+1,
       message: state.messageText};
       let stateCopy={...state}
       stateCopy.messagesPage={...state.messagesPage}
       stateCopy.msd.push(newMessage);
       stateCopy.messageText="";
       return stateCopy;}
   case "changeNewMessageText":{
         let stateCopy={...state}
         stateCopy.messageText=action.text;
         return stateCopy;}
   default:
 return state;}
} */