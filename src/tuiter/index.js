import React from "react";
import ExploreComponent from "./explore/index";
import NavigationSidebar from "./navigation-sidebar/index";
import WhoToFollowList from "./who-to-follow-list/who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {Routes, Route} from "react-router";
import TuitsList from "./tuits/TuitsList";
import WhatsHappening from "./home/whats-happening";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store} >
            <Routes>
                <Route path="home" element={<TuitsList />}/>
            </Routes>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <WhatsHappening />
                    <ExploreComponent/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
        </div>
        </Provider>
    );
}

export default Tuiter

