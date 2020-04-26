import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import siteBarReducer from "./siteBarReducer";
let store = {
  subscribe(observer){ 
    this._callSubscriber=observer},
  _callSubscriber(){},
_state:{ 
messagesPage:{
  msd : [
    { id: 1, message: "Отстань не дам!!!" },
    { id: 2, message: "Мяу люблю тебя больше чем маму. мама фуу" },
    { id: 3, message: "йоу фэйс и фараон топчик" },
    { id: 4, message: "люблю стритсы" },
    { id: 5, message: "Псс.. Парень! Денег надо?!" }
  ],
messageText:"",
     dgd : [
    { id: 1, name: "Олька" },
    { id: 2, name: "Доча" },
    { id: 3, name: "Фаршмаки" },
    { id: 4, name: "Потрасмайкер" },
    { id: 5, name: "Билл Гейтс" }
  ]
},
profilePage:{
    psd : [
    { id: 1, message: "Hi! How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post!", likesCount: 15 },
    { id: 3, message: "Наконец-то я на странице", likesCount: 100 },
    { id: 4, message: "реакт рулит", likesCount: 0 },
    { id: 5, message: "хз че уже написать", likesCount: 1 }],
  newPostText:""},
SiteBar:{
  sbf:[{name:"Usama Bin", src:"https://www.quirkybyte.com/trendz/wp-content/uploads/sites/4/2018/01/Avatar-The-Osama-Bin-Laden-Version-67609.jpg"},
      {name:"Missis Bin", src:"https://cdn.viralitytoday.com/posts/YBA8e/xZ77x8B8.jpg"},
      {name:"Cat in Shoes", src:"https://www.meme-arsenal.com/memes/322e8a73fd87bccbcddbef10d0b5deb6.jpg"},
      {name:"Osel Prosto", src:"https://www.peoples.ru/character/movie/donkey/donkey_4.jpg"}]}
},
getState(){return this._state},

dispatch(action){
       this._state.messagesPage=dialogsReducer(this._state.messagesPage, action);
       this._state.profilePage=profileReducer(this._state.profilePage, action); 
        this._state.SiteBar=siteBarReducer(this._state.SiteBar, action);
        this._callSubscriber(this._state);}
  }

  export default store; 