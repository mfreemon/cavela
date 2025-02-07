import React, {useState } from "react";
import DrawerRight from "../Drawer/DrawerRight";
import DashBlock from "../DashBlock/Dashblock";
import CavTable from "../CavTable/CavTable";
import './dashboard.scss';



const Dashboard = () => {
  const [drawerOpen, setOpenDrawer] = useState(false);

  return (
    <div className="dashboard">
      <DrawerRight openDrawer={drawerOpen} closeDrawer={() => setOpenDrawer(false)} />
      <h1>Select Suppliers</h1>
      <h2>Quotes{3}</h2>
      <DashBlock>
        <CavTable/>
      </DashBlock>
      <button className="btn" onClick={() => setOpenDrawer(true)}>Open Drawer</button>
    </div>
  )
}

export default Dashboard;