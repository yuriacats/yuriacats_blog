import '../PostList.scss';
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import {NavLink} from "react-router-dom";


const TagList =() =>{
    return(
        <p className="tags">tags</p>
        )
}

const PostContent = () =>{
    const[getdata,setData]=useState(null)
    useEffect(() => {
        let json={};
        axios.get('https://g7bdlrmjyi.execute-api.ap-northeast-1.amazonaws.com/Prod/').then((res) => {
            json = res;
            setData(json.data);
        }).catch((err) =>{
            //error処理書く
            })
    },[]);


    if (!getdata) return <>Loading...</>;
    console.log(getdata);
    return(
        getdata.response_base.map(item =>(
            <NavLink to={"/post/"+item.id} activeStyle={{ textDecoration: 'none' }} >
            <div className={"blog-content"}>
                <div className={"ogp-image"}>
                    <img src={item.ogpimg} alt="ogp-images" />
                </div>
                <div className={"text-content"}>
                    <div className="tag-content">
                        <TagList />
                    </div>
                    <h2 className={"blog-titles"}>{item.title}</h2>
                    <p className={"date"}>{item.date}</p>
                </div>
            </div>
            </NavLink>
        )))
        }

const PostList =()=>(
    <section className="left-content">
        <PostContent/>
    </section>
)

export default PostList;
