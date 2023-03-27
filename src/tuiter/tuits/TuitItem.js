import React from "react";
import "../index.css";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="container m-0 p-0">
                <div className="row">
                    <div className="col-1">
                        <img className="img-fluid" src={"/images/" + tuit.image}
                             style={{objectFit: "fill", borderRadius: "50px"}}/>
                    </div>
                    <div className="col-10">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}/>
                        <div className="fw-bold">{tuit.userName} <i className="fa fa-check-circle"/> {tuit.handle}
                            <span className="wd-post-category"> {tuit.time ? " - " + tuit.time : ""}</span></div>
                        <div>
                            {tuit.tuit}
                        </div>
                    </div>
                </div>
                <TuitStats liked={tuit.liked} likes={tuit.likes} replies={tuit.replies}
                           retuits={tuit.retuits} _id={tuit._id}/>
            </div>

        </li>
    );
};
export default TuitItem;