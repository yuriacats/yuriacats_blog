import '../PostList.scss';
import axios from 'axios';
import React, { useState , useEffect} from 'react';

const TagList =(props) =>{
    return(
        <p className="tags">{props.tag}</p>
    )
}

const PostContent = () =>{
    const[getdata,setData]=useState(null)
    useEffect(() => {
        let json={};
        axios.get('./timeline.json').then((res) => {
            json = res;
            setData(json.data);
        }).catch((err) =>{
            //error処理書く
            })
    },[]);


    if (!getdata) return <>Loading...</>;
    console.log(getdata);
    return(
        getdata.posts.map(item =>(
            <div className={"blog-content"}>
                <div className={"ogp-image"}>
                    <img src={item.ogpimg} />
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