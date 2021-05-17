import React,{ useState } from 'react'
import ReactMarkdown from "react-markdown"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nord} from 'react-syntax-highlighter/dist/esm/styles/prism'
import math from 'remark-math'
import Tex from "@matejmazur/react-katex"
import dayjs from 'dayjs'

const Editor = () => {
    const [TextData,setData] = useState({value:" $X_C = \\dfrac{1}{j \\omega C}$"});
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
