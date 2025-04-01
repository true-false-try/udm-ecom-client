import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "./store/actions/postAction.js";

const PostList = () => {
    const dispatch = useDispatch();
    const {posts, loading, error} = useSelector((state) => state.posts)

    useEffect(() => {
        console.log("Fetching strickt...")
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Loading....</p>
    if (error) return <p>Error:{error}</p>
    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;