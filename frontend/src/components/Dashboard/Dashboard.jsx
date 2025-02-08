import React, { useEffect, useState } from "react";
import DrawerRight from "../Drawer/DrawerRight";
import DashBlock from "../DashBlock/Dashblock";
import CavTable from "../CavTable/CavTable";
import './dashboard.scss';

import quotes from '../../assets/quotes.json'

const Dashboard = () => {
  const [drawerOpen, setOpenDrawer] = useState(false);
  const [quoteData, setQuoteData] = useState([]);
  const [supplierData, setSupplier] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise((resolve) => setTimeout(() => resolve(quotes), 2000)); // Simulate network delay
      setQuoteData(response)
    };

    fetchData();
  },[])

  const handleSupplier = (ven, id) => {
    const findItem = ven.product_quotes.find(item => item.id == id);
    setSupplier({supplier: ven, item: findItem});
  }

  console.log(supplierData)
  return (
    <div className="dashboard">
      <DrawerRight 
        openDrawer={drawerOpen} 
        closeDrawer={() => setOpenDrawer(false)}
        drawerData={supplierData} 
      />
      <h1>Select Suppliers</h1>
      <h2>Quotes{3}</h2>
      <DashBlock>
        {quoteData.length > 1 && (
          <CavTable data={quoteData} selectSupplier={handleSupplier}/>
        )}  
      </DashBlock>
      <button className="btn" onClick={() => setOpenDrawer(true)}>Open Drawer</button>
    </div>
  )
}

export default Dashboard;