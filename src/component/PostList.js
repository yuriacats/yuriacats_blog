import '../PostList.scss';
import axios from 'axios';
import React, { useState , useEffect} from 'react';

const TagList =(props) =>{
    return(
        <p className="tags">{props.tag}</p>
    )
}

const PostContent = () =>{
    const getdata2 =   [
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

    const[getdata,setData]=useState({this:[]})
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('./timeline.json');
            setData(response.data);
        }
        getData();
    },[]);


    if (!getdata) return <>Loading...</>;
    return(
        getdata.map(item =>(
            <div className={"blog-content"}>
                <div className={"ogp-image"}>
                    <img src={item.ogpimg}/>
                </div>
                <div className={"text-content"}>
                    <div className="tag-content">
                        <p>仮機能です</p>
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