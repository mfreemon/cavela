import React, { useEffect, useState } from "react";
import DrawerRight from "../Drawer/DrawerRight";
import DashBlock from "../DashBlock/Dashblock";
import CavTable from "../CavTable/CavTable";
import './dashboard.scss';

import quotes from '../../assets/quotes.json'

const Dashboard = () => {
  const [drawerOpen, setOpenDrawer] = useState(false);
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise((resolve) => setTimeout(() => resolve(quotes), 2000)); // Simulate network delay
      console.log(response)
      setQuoteData(response)
    };

    fetchData();
  },[])

  return (
    <div className="dashboard">
      <DrawerRight openDrawer={drawerOpen} closeDrawer={() => setOpenDrawer(false)} />
      <h1>Select Suppliers</h1>
      <h2>Quotes{3}</h2>
      <DashBlock>
        {quoteData.length > 1 && (
          <CavTable data={quoteData}/>
        )}  
      </DashBlock>
      <button className="btn" onClick={() => setOpenDrawer(true)}>Open Drawer</button>
    </div>
  )
}

export default Dashboard;