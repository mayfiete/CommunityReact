import React from "react";
import StickyBox from "react-sticky-box";

const SideBar = () => (
    <div className="row">
        <StickyBox offsetTop={20} offsetBottom={20}>
            <div>Sidebar</div>
        </StickyBox>
        <div>Content</div>
    </div>
);

export default SideBar;