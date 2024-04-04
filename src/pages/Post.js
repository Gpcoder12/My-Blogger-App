import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import '../App.css';

export default function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:3002/api/getFromId/${postId}`).then((response) => {
            console.log(response);
            setPost({
                title: response.data[0].title,
                postText: response.data[0].post_text,
                userName: response.data[0].user_name,
                id: response.data[0].id
            });
        });
    }, [postId]);

    const deletePost = () => {
        Axios.delete(`http://localhost:3002/api/delete/${postId}`).then((response) => {
            alert("You deleted a post");
        });
    };

    return (
        <div className="Post individual">
            <h1 className="post-title">{post.title}</h1>
            <p>{post.postText}</p>
            <h4>{post.userName}</h4>
            <button onClick={deletePost}>X</button>
        </div>
    );
}
