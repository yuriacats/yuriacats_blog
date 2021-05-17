import React,{ useState ,useEffect} from 'react'
import axios from 'axios';
import ReactMarkdown from "react-markdown"
import { useParams } from 'react-router-dom'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nord} from 'react-syntax-highlighter/dist/esm/styles/prism'
import math from 'remark-math'
import Tex from "@matejmazur/react-katex"
import dayjs from 'dayjs'
const Editor=() => {
    const [getData,setData] =useState(null);
    const { id } = useParams();
    useEffect( () =>{
        if (id){
            const url ='https://g7bdlrmjyi.execute-api.ap-northeast-1.amazonaws.com/Prod/post/'+id
            //TODO: ルーティングの実装(post/{id}で目的のページを受け取る)ができたら消す。
            axios.get(url).then((res) => {
                //TODO: res.dataがErrorを返してきたとき(404エラー)404ページへリダイレクトさせる
                setData(res.data);
            }).catch((err) => {
                setData(null)
            })
        }
    },[id])
    if(!id ) return <><><Edit First_Text="$X_C = \dfrac{1}{j \omega C}$"/></></>
    else if (getData == null) return <>Loading...</>;
    return(
        <><Edit First_Text={getData.post}/></>
    )
}

const Edit = (e= '') => {
    const [TextData,setData] = useState({value:e.First_Text});
    const renderers = {
        inlineMath: ({value}) => <Tex math={value} />,
        math: ({value}) => <Tex block math={value} />,
        code: ({language, value}) => {
            return <SyntaxHighlighter style={nord} language={language} children={value} />
        }
    }

    function handleInputChange(e) {
        let text=e.target.value
        if(e.nativeEvent.inputType === 'insertLineBreak'){
            //TODO Add '\'event
        }
        setData({value: text});

    }
    function editOutputTest(){
        let today = dayjs().format("YYYYMMDD");
        console.log(JSON.stringify({"id": Date.now(),
            "update": today,
            "create": today,
            "tags": [],
            "title": "test",
            "prevPost": null,
            "nextPost": null,
            "post":TextData.value}))
    }

    return(
        <div>
        <textarea className={"text-area"} value={TextData.value} onChange={handleInputChange}/>
            <button type="submit" onClick={editOutputTest}>Submit</button>
        <ReactMarkdown
            renderers={renderers}
            plugins={[math]}
        >
            {TextData.value}
        </ReactMarkdown>

        </div>
        )
}
export default Editor;
