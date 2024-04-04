import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css';

function CreatePost() {
    const [userName, setUserName] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const submitPost = async () => {
        try {
            const response = await Axios.post('http://localhost:3002/api/create', {
                userName: userName,
                title: title,
                text: text
            });
            console.log("Post submitted successfully:", response.data);
            // Reset form fields after successful submission
            setUserName("");
            setTitle("");
            setText("");
            // Provide feedback to the user
            alert("Post submitted successfully!");
        } catch (error) {
            console.error("Error submitting post:", error);
            // Provide feedback to the user about the error
            alert("An error occurred while submitting the post. Please try again later.");
        }
    }

    return (
        <div className="CreatePost">
            <div className="uploadPost">
                <label>Username: </label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Post Text</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <button onClick={submitPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;
