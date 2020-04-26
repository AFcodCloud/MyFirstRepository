import withAuthRedirectHOC from '../../HOC/AuthRedirectHOC';
import Settings from './Settings';

const SettingsContainer = withAuthRedirectHOC(Settings)

export default SettingsContainer;