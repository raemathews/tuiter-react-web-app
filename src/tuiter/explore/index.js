import React from 'react';
import PostSummaryList from "../post-summary-list/index";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ExploreComponent = () => {
    return (
        <>
        <div className="row">
            <div>
                <input className="wd-search"
                       type="text"
                       placeholder="Search Tuiter"
                       id="searchbar-input"/>
                <a href="#">
                    <i className="fa fa-cog align-middle p-2"/>
                </a>
            </div>
        </div>
    <ul className="nav nav-tabs mt-2">
        <li className="nav-item">
            <a className="nav-link active" href="#">For You</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Trending</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="#">Entertainment</a>
        </li>
    </ul>
    <div className="wd-starship mt-2 position-relative">
        <img src={"/images/starship.png"} className="w-100 d-inline"/>
        <span id="wd-starship" className="position-absolute p-2 fs-4">SpaceX's Starship</span>
    </div>
            <PostSummaryList />
            </>
    );
}

export default ExploreComponent;