import '../settings/settings.css';
import Sidebar from '../../sidebar/Sidebar';
import Profile from '../../../images/conductor.jpg'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePic">
                        <img src={Profile} alt="profile" />
                    <label htmlFor="fileInput">
                    <i className="settingsProfileIcon fas fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
