import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk} from "../../services/tuitsThunk";
import {changeLike} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const {
        _id,
        replies,
        retuits,
        likes,
        liked
    } = tuit;
    const tuits
        = useSelector(state => state.tuits);
    const dispatch = useDispatch()
    const likeColor = liked ? "red" : "gray"
    const defaultColor = "gray"
    const onLikeClickHandler = (tuit) => {
        const tuitLikes = liked ? likes - 1 : likes + 1;
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuitLikes,
            liked: !liked
        }));
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
                    <i onClick={() => onLikeClickHandler(tuit)}
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