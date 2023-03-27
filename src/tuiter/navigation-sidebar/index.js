import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) =>
{
    return (
        <>
        <div className="list-group mb-2">
            <Link to="home" className={`list-group-item list-group-item-action`}>
                <i className="fab fa-twitter"/>
            </Link>
            <Link to="home" className={`list-group-item list-group-item-action ${active === 'home'?'active':''}`}>
                <i className="fa fa-home"/> <span className="wd-navigation-label d-xl-inline d-none">Home</span>
            </Link>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag"/> <span
                className="wd-navigation-label d-xl-inline d-none">Explore</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell"/> <span
                className="wd-navigation-label d-xl-inline d-none">Notifications</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'messages'?'active':''}`}>
                <i className="fa fa-mail-bulk"/> <span
                className="wd-navigation-label d-xl-inline d-none">Messages</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark"/> <span
                className="wd-navigation-label d-xl-inline d-none">Bookmarks</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list"/> <span className="wd-navigation-label d-xl-inline d-none">Lists</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user"/> <span className="wd-navigation-label d-xl-inline d-none">Profile</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'more'?'active':''}`}>
                <i className="fa fa-plus"/> <span className="wd-navigation-label d-xl-inline d-none">More</span>
            </a>
        </div>
    <button type="button" className="btn btn-primary wd-full-width-btn">Tuit</button>
    </>
    );

};
export default NavigationSidebar;

