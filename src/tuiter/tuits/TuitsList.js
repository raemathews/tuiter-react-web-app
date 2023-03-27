import React from "react";
import TuitItem
    from "./TuitItem";
import {useSelector} from "react-redux";


const TuitsList = () => {
    const tuitsArray = useSelector(state => {
        console.log('State: ', state.tuits);
        return state.tuits
    })
    return (
        <>
            <h2>Home</h2>
            <ul className="list-group">
                {
                    tuitsArray.map(tuit =>
                        <TuitItem
                            key={tuit._id} tuit={tuit}/>)
                }
            </ul>
        </>
    );
};
export default TuitsList;