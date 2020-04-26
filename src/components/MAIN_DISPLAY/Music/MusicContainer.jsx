import withAuthRedirectHOC from "../../HOC/AuthRedirectHOC"
import Music from './Music';



const MusicContainer=withAuthRedirectHOC(Music)

export default MusicContainer;
