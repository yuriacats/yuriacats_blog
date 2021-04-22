import axios from 'axios';
import React, { useState , useEffect} from 'react';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import Tex from '@matejmazur/react-katex'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nord} from 'react-syntax-highlighter/dist/esm/styles/prism'
import math from 'remark-math'

const Post = () => {
    const [getData,setData] =useState(null);
    const { id } = useParams();
    const renderers = {
        inlineMath: ({value}) => <Tex math={value} />,
        math: ({value}) => <Tex block math={value} />,
        code: ({language, value}) => {
            return <SyntaxHighlighter style={nord} language={language} children={value} />
        }
    }
    useEffect(() => {
        const url ='/post'+id+'.json'
        axios.get(url).then((res) => {
            setData(res.data);
        }).catch((err) => {
            setData(null)
        })
    },[]);
    console.log(getData);
    console.log(id);
    if (getData == null) return <>Loading...</>;
    return(<section className={'post-content'}>
            <h2>{getData.title}</h2>
            <ReactMarkdown
                renderers={renderers}
                plugins={[math]}
            >
                {getData.post}
            </ReactMarkdown>

    </section>
    )
};
export default Post;