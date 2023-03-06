import React from "react";
import "../index.css";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.webp' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="container">
                <div className="row">
                    <img width={"90px"} src={`/images/${who.avatarIcon}`} className="wd-account-image col-2 align-middle"/>
                    <div className="col-6 m-1 ps-2">
                        <div className="fw-bold text-nowrap">{who.userName} <i className="fa fa-check-circle"/>
                        </div>
                        <div className="fw-light">@{who.handle}</div>
                    </div>
                    <div className="col-4 col-lg-2">
                        <button type="button" className="btn btn-primary align-middle">Follow</button>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;