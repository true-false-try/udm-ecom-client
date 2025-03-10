import {useEffect, useState} from "react";

function JsonPlaceholderAPIs(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setData(json)
                setLoading(false);
                throw new Error('Something went wrong');
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError('Failed to fetch the data');
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

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