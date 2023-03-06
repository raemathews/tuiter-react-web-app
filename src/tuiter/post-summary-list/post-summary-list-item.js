import React from "react";
import "../index.css";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.webp"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="container m-0 p-0">
                <div className="row">
                    <div className="col-9">
                        <div className="wd-post-category">{post.topic ? post.topic : ""}</div>
                        <div className="fw-bold">{post.userName} <i className="fa fa-check-circle"/>
                            <span className="wd-post-category"> {post.time ? " - " + post.time : ""}</span></div>
                        <div className="fw-bold">
                            {post.title ? post.title : ""}
                        </div>
                    </div>
                    <div className="wd-suggested-post-image col-3 d-flex align-items-center">
                        <img src={`/images/${post.image}`} className="float-end "/>
                    </div>
                </div>
            </div>
        </li>
        // <li className="list-group-item">
        //     <div className="row">
        //         <div className="col-10">
        //             <div>{post.userName} . {post.time}</div>
        //             <div className="fw-bolder">{post.topic}</div>
        //             <div>{post.title}</div>
        //         </div>
        //         <div className="col-2">
        //             <img width={70} className="float-end rounded-3 wd-suggested-post-image" src={`/images/${post.image}`}/>
        //         </div>
        //     </div>
        // </li>
    );
};
export default PostSummaryItem;