import React from "react";
import {Button, Drawer} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DrawerList from "../DrawerList/DrawerList";
import './drawer.scss';

const DrawerRight = ({ closeDrawer, openDrawer, drawerData, setNext }) => {
  const supplierName = drawerData?.supplier?.supplier.supplier_cloak;
  return (
    <Drawer className="drawer" anchor="right" open={openDrawer}>
      <div className="closeX">
       <h3>{supplierName}</h3>
        <CloseIcon onClick={closeDrawer}/>
      </div>
      {drawerData && (
        <DrawerList data={drawerData}/>
      )} 
      <div className="drawer-foot">
        <Button className="close" onClick={closeDrawer} variant="outlined" startIcon={<CloseIcon/>}>Close</Button>
        <Button className="purchase" onClick={() => {closeDrawer(), setNext(true)}} variant="contained" startIcon={<CheckIcon />}>Purchase</Button>
      </div>   
    </Drawer>
  )
}

export default DrawerRight;