import axios from 'axios';
import React, { useState , useEffect} from 'react';
import ReactMarkdown from 'react-markdown'
import Tex from '@matejmazur/react-katex'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const Post = () => {
    const [getData,setData] =useState(null)
    useEffect(() => {
        axios.get('./post1.json').then((res) => {
            setData(res.data);
        }).catch((err) => {
            //error
        })
    },[]);
    console.log(getData)
    if (getData == null) return <>Loading...</>;
    return(<>
            <h2>{getData.title}</h2>
            <ReactMarkdown>
                {getData.post}
            </ReactMarkdown>

    </>
    )
};
export default Post;