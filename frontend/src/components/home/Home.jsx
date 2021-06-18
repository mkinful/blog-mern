import './home.css'
import Header from '../header/Header';
import Posts from '../posts/Posts';

export default function Home() {
    return (
        <>
        <Header />
        <div className="home">
            <Posts />
            
        </div>
        </>
    )
}
