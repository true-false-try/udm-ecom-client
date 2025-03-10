import {useEffect, useState} from "react";

function JsonPlaceholderAPIs(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);
    return (
        <div>
            <h1>Json placeholder API</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JsonPlaceholderAPIs;