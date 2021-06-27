import './user.css';
import userImg from '../../../images/user.jpeg';
import axios from 'axios';
import { useState } from 'react';
import { Context } from '../../../context/Context';
import { useContext } from 'react';

export default function User() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
                await axios.post('/upload', data);
            } catch (err) {

            }
        }
        try {
            const res = await axios.post('/posts', newPost);
            window.location.replace('/post/' + res.data._id);
        } catch (err) {

        }
    };

    return (
        <div className="user">
            {file && <img className="userImg" src={URL.createObjectURL(file)} alt="user" />}
            <form className="userForm" onSubmit={handleSubmit}>
                <div className="userFormGroup">
                    <label htmlFor="userInput">
                    <i className="userIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="userInput" style={{display: "none"}} 
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input type="text" placeholder="Add your own review or art" className="userInput" 
                        autoFocus={true} onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="userFormGroup">
                    <textarea placeholder="What improvements can be made to the music?" type="text" className="userInput userText" 
                        onChange={(e) => setDesc(e.target.value)}>
                    </textarea>
                </div>
                <button className="userSubmit" type="submit">Submit</button>
            </form>
        </div>
    )
}
