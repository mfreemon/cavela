import React, { useEffect, useState } from "react";
import DrawerRight from "../Drawer/DrawerRight";
import DashBlock from "../DashBlock/Dashblock";
import CavTable from "../CavTable/CavTable";
import ProgressInfo from "../ProgressInfo/ProgressInfo";
import './dashboard.scss';

import quotes from '../../assets/quotes.json';
import quoting from '../../assets/quoting.json'


const Dashboard = () => {
  const [drawerOpen, setOpenDrawer] = useState(false);
  const [quoteData, setQuoteData] = useState([]);
  const [supplierData, setSupplier] = useState({});
  const [goToNext, setGotoNext] = useState(false);
  const [quoteInfo, setQuoteInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise((resolve) => setTimeout(() => resolve(quotes), 500)); 
      const quoteCount = await new Promise((resolve) => setTimeout(() => resolve(quoting), 500));
      setQuoteData(response)
      setQuoteInfo(quoteCount)
    };

    fetchData();
  },[])

  const handleSupplier = (ven, id) => {
    const findItem = ven.product_quotes.find(item => item.id == id);
    setSupplier({supplier: ven, item: findItem});
  }

  return (
    <div className="dashboard">
      <DrawerRight 
        openDrawer={drawerOpen} 
        closeDrawer={() => setOpenDrawer(false)}
        drawerData={supplierData}
        setNext={setGotoNext} 
      />
      <h1>Select Suppliers</h1>
      <h2>Quotes ({quoteInfo?.stats?.surfaced_quotes})</h2>
      <DashBlock>
        {quoteData.length > 1 && (
          <CavTable data={quoteData} selectSupplier={handleSupplier} open={setOpenDrawer}/>
        )}  
      </DashBlock>
      <DashBlock>
        <ProgressInfo next={goToNext} />
      </DashBlock>
    </div>
  )
}

export default Dashboard;