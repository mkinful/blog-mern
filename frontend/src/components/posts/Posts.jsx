import './posts.css';
import Post from '../post/Post';
import Surfing from '../post/Surfing';
import Champagne from '../post/Champagne';
import Rocky from '../post/Rocky';
import Photographs from '../post/Photographs';
import Sordino from '../post/Sordino';
import Ross from '../post/Ross';
import Kiki from '../post/Kiki';
import Fanfare from '../post/Fanfare';


export default function Posts({posts}) {
    return (
        <div className="posts">
            {posts.map((p) => (
                <Post post={p} />
            ))}
        </div>
    )
}