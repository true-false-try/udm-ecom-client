import {useState} from "react";

import api from "../api/Api.js";

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