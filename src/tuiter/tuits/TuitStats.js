import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeLike} from "./tuits-reducer";

const TuitStats = ({
    _id,
    replies,
    retuits,
    likes,
    liked
                   }) => {
    const tuits
        = useSelector(state => state.tuits);
    const dispatch = useDispatch()
    const likeColor = liked ? "red" : "gray"
    const defaultColor = "gray"
    const onLikeClickHandler = (id) => {
        console.log("id: " + id)
        dispatch(changeLike(id))
    }
    return (
        <div className="row">
            <div className="col-3">
                <a href="#">
                    <i className="fa fa-comment p-2" style={{color: defaultColor}}/>
                </a>
                <span className="wd-numbers">{replies}</span>
            </div>
            <div className="col-3 p-1">
                <a href="#">
                    <i className="fa fa-retweet p-2" style={{color: defaultColor}}/>
                </a>
                <span className="wd-numbers">{retuits}</span>
            </div>
            <div className="col-3">
                <a href="#">
                    <i onClick={() => onLikeClickHandler(_id)}
                       className="fa fa-heart p-2" style={{color: likeColor}}/>
                </a>
                <span className="wd-numbers wd-like">{likes}</span>
            </div>
            <div className="col-3">
                <a href="#">
                    <i className="fa fa-share-alt p-2" style={{color: defaultColor}}/>
                </a>
            </div>
        </div>
    )
}

export default TuitStats