import React, {useState } from "react";
import DrawerRight from "../Drawer/DrawerRight";
import './dashboard.scss';


const Dashboard = () => {
  const [drawerOpen, setOpenDrawer] = useState(false);

  return (
    <div className="dashboard">
      <DrawerRight openDrawer={drawerOpen} closeDrawer={() => setOpenDrawer(false)} />
      <h1>This is the Dashboard</h1>
      <button className="btn" onClick={() => setOpenDrawer(true)}>Open Drawer</button>
      <div className="dashboard-block">asxasxå</div>
    </div>
  )
}

export default Dashboard;