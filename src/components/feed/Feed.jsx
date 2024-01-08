import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import './feed.css';
import Skeleton from '../skeleton/Skeleton';

const Feed = () => {

    const [posts, setPosts] = useState([]);
    const [isLoadinng, setIsLoadinng] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            setIsLoadinng(true);
            try {
                const res = await axios.get("/api/videos");
                setPosts(res.data);
            } catch (error) {
                console.log(error);
            }
            setIsLoadinng(false);
        };
        getPosts();
    }, []);


    return (
        <div className="feed">
            {isLoadinng ? <Skeleton type="feed"/> : (posts.map((post) => (
                <Post key={post.id} post={post} />
            )))}

        </div>
    )
}

export default Feed