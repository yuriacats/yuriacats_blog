import React,{ useState } from 'react'
import ReactMarkdown from "react-markdown"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nord} from 'react-syntax-highlighter/dist/esm/styles/prism'
import math from 'remark-math'
import Tex from "@matejmazur/react-katex"

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
        console.log(e);
        setData({value: e.target.value});

    }

    return(
        <div>
        <textarea value={TextData.value} onChange={handleInputChange}/>
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
