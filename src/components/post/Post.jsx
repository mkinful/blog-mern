import '../post/post.css';
import postImg from '../../images/bebop.jpg'

export default function Post() {
    return (
        <div className="post">
            <img src={postImg} className="postImg" alt="" />
            <div className="postInfo">
                <div className="postSections">
                    <span className="postSect">Orchestration</span>
                    <span className="postSect">Libraries</span>
                </div>
                <span className="postTitle">Some Random Text To Be Filled Later</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
        </div>
    )
}
