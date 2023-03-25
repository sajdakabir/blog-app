import React, { useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
    ],
};

function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    const createNewPost = async(e) => {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file',files[0]);

        e.preventDefault();
        const res=await fetch('http://localhost:5000/post', {
            method: 'POST',
            // send all the data as a from data
            body:data,
        });
        // res.json()

    }
    return (
        <form onSubmit={createNewPost}>
            <input
                type='title'
                placeholder={'Title'}
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type='summary'
                placeholder={'Summary'}
                value={summary}
                onChange={e => setSummary(e.target.value)}
            />
            <input type="file"
                onChange={e => setFiles(e.target.files)}
            />
            < ReactQuill
                value={content}
                onChange={newValue => setContent(newValue)}
                modules={modules} />
            <button style={{ marginTop: '5px' }}>Create post</button>
        </form>
    )
}

export default CreatePost
