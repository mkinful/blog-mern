import './posts.css';
import Post from '../post/Post';
import Surfing from '../post/Surfing';
import Champagne from '../post/Champagne';
import Tasto from '../post/Tasto';
import Autumn from '../post/Autumn';
import Rocky from '../post/Rocky';
import Photographs from '../post/Photographs';
import Sordino from '../post/Sordino';
import Ross from '../post/Ross';

export default function Posts() {
    return (
        <div className="posts">
            <Post />
            <Surfing />
            <Champagne />
            <Photographs />
            <Ross />
            <Sordino />
            <Rocky />
            <Tasto />
            <Autumn />
        </div>
    )
}
