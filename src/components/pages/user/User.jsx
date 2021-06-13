import '../user/user.css'
import user from '../../../images/user.jpeg'

export default function User() {
    return (
        <div className="user">
            <img className="userImg" src={user} alt="user" />
            <form className="userForm">
                <div className="userFormGroup">
                    <label htmlFor="userInput">
                    <i className="userIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="userInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Add your music" className="userInput" autoFocus={true}/>
                </div>
                <div className="userFormGroup">
                    <textarea placeholder="What is the story behind the music?" type="text" className="userInput userText"></textarea>
                </div>
                <button className="userSubmit">Submit</button>
            </form>
        </div>
    )
}
