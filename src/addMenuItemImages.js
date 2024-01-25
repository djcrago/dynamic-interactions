import Menu from './photos/menu.svg';
import Profile from './photos/account.svg';
import Messages from './photos/message.svg';
import Settings from './photos/cog.svg';

export default function addMenuItemImages() {
    const menu = document.querySelector('.menu-img');
    const profile = document.querySelector('.profile-img');
    const messages = document.querySelector('.messages-img');
    const settings = document.querySelector('.settings-img');

    menu.src = Menu;
    profile.src = Profile;
    messages.src = Messages;
    settings.src = Settings;
}