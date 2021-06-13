import '../singlePost/singlepost.css'
import Bebop from '../../images/bebop2.png'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={Bebop} alt="bebop" />
                <h1 className="singlePostTitle">
                    Soft Mallet, Fast Motor
                </h1>
            </div>
        </div>
    )
}