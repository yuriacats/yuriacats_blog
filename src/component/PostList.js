import '../PostList.scss';
import axios from 'axios';
import React, { useState , useEffect} from 'react';



const PostContent = () =>{
    const getdata =   [
    {
        "id": 1,
        "title": "hogehoge",
        "ogpimg": "https://pbs.twimg.com/profile_images/1272504163427971073/hCPMkUs5_400x400.jpg",
        "tags": ["tag1","tag2","tag3"],
        "date":20200406
    },
    {
        "id": 2,
        "title": "hogehoge2",
        "ogpimg": "https://pbs.twimg.com/profile_images/1272504163427971073/hCPMkUs5_400x400.jpg",
        "tags": ["tag1","tag2","tag3"],
        "date":20200406
    }];
    const[data,setData]=useState({this:[]})
    useEffect(async () => {
        const result =await axios('./timeline.json');
        setData(result.data);
    });


return(
    getdata.map(item =>(
        <div className={"blog-content"}>
            <div className={"ogp-image"}>
                <img src={item.ogpimg}/>
            </div>
            <div className={"text-content"}>
                <div className="tag-content">
                    {item.tags.map(tag =>(<p className="tags">{tag}</p>))}
                </div>
                <h2 className={"blog-titles"}>{item.title}</h2>
                <p className={"date"}>{item.date}</p>
            </div>
        </div>
    )))
}
const PostList =()=>(
    <section className="left-content">
        <PostContent/>
    </section>
)

export default PostList;