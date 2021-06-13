import '../post/post.css';
import postImg from '../../images/bebop.jpg'

export default function Post() {
    return (
        <div className="post">
            <img src={postImg} className="postImg" alt="" />
            <div className="postInfo">
                <div className="postSections">
                    <span className="postSect">Orchestration Breakdowns</span>
                    <span className="postSect">Libraries Used</span>
                </div>
                <span className="postTitle">Some Random Text</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescript">
                Each section will offer a detailed breakdown of the orchestration techniques used. 
                From time signature to tempo markings. I will also go into detail regarding the 
                software libraries used to bring the music to life. 

                Each section will offer a detailed breakdown of the orchestration techniques used. 
                From time signature to tempo markings. I will also go into detail regarding the 
                software libraries used to bring the music to life. 

                Each section will offer a detailed breakdown of the orchestration techniques used. 
                From time signature to tempo markings. I will also go into detail regarding the 
                software libraries used to bring the music to life. 
            </p>
        </div>
    )
}
