import axios from "axios";
import {useState} from "react";

axios.interceptors.request.use(request => {
    console.log('Starting Request')
    return request;
});

axios.interceptors.response.use(response => {
    console.log('Starting Response')
    return response;
});

function PostJsonPlaceholderAPIs(){
    const [data, setData] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title:'foo',
            body:'bar',
            userId:1,
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(response =>  {
                console.log('New Post Added: ', response.data);
                setData([response.data]);
            });
    };

    return(
        <div>
            <h1>POST API's Request</h1>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Add POST</button>
            </form>
        </div>
    );
}

export default PostJsonPlaceholderAPIs;