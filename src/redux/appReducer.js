import { getAuthUserData } from "./authReducer";


let initialState = {
  initialized:false
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized:true
      };
    default:
      return state;
  }
};
//ActionCreators////////////////////////
export let initializedSuccess = () => {
  return { type: "INITIALIZED_SUCCESS"};
};

export const initializeApp=()=>{
  return (dispatch)=>{
  let propmise = dispatch(getAuthUserData()) //этот dispatch вернет промис из getAuthUserData в переменную promise
    propmise.then(()=>{//когда асинхронная операция закончится инициализируем приложение для показа пользователю
       dispatch(initializedSuccess())
    })
   
  }
}


export default appReducer;

