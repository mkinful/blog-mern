import './single.css'
import SinglePost from '../../singlePost/SinglePost';
import Champ from '../../singlePost/Champ';

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Champ />
        </div>
    )
}
