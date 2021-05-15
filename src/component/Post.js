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
        
        const url ='https://g7bdlrmjyi.execute-api.ap-northeast-1.amazonaws.com/Prod/post/'+id
        //TODO: ルーティングの実装(post/{id}で目的のページを受け取る)ができたら消す。
        axios.get(url).then((res) => {
            //TODO: res.dataがErrorを返してきたとき(404エラー)404ページへリダイレクトさせる
            setData(res.data);
        }).catch((err) => {
            setData(null)
        })
    },[]);
    if (getData == null) return <>Loading...</>;
    return(<section className={'post-content'}>
            <h2>{getData.title}</h2>
            <p className={'post-read-time'}>この記事は{(getData.post.length/600).toFixed()}分で読めます。</p>
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
