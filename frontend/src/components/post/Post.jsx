import './post.css';
import bebopImg from '../../images/bebop.jpg'

export default function Post() {
    return (
        <div className="post">
            <img src={bebopImg} className="postImg" alt="bebop" />
            <div className="postInfo">
                <div className="postSections">
                    <span className="postSect">Orchestration Breakdowns</span>
                    <span className="postSect">Libraries Used</span>
                </div>
                <span className="postTitle">Soft Mallets, Fast Motor</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescript">
            Composed in March 2020 as part of a Film Scoring Challenge, this piece accompanies the Main Title sequence for the classic Speilberg feature, "Catch Me If You Can". 
            This hybrid of Bebop and Big Band Jazz was easily the most fun I had writing a piece of music. The most challenging aspect of the cue was never the composition, 
            but rather the daunting task of rescoring the now iconic title sequence which is scored to perfection by the greatest living composer; John Williams. 
            But once that nervousness went away, I was able to focus on a piece inspired by the brilliant Yoko Kanno's music for "Cowboy Bebop". 
            I wanted the piece to have a "Cops and Robbers" feel to it while still capturing the fun tone of the movie. 
            </p>
        </div>
    )
}
