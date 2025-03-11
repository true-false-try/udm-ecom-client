import axios from "axios";
import {useState} from "react";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
        'Authorization':'Barear <TOKEN>',
        'Content-Type':'application/json'
    }
});

api.interceptors.request.use(request => {
    console.log('Starting Request', request)
    return request;
});

api.interceptors.response.use(response => {
    console.log('Starting Response', response)
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
        api.post('/posts', newPost)
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