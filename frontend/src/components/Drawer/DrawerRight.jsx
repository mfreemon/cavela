import React from "react";
import {Drawer} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DrawerList from "../DrawerList/DrawerList";
import './drawer.scss';

const DrawerRight = ({ closeDrawer, openDrawer, drawerData }) => {
  console.log(drawerData)
  return (
    <Drawer className="drawer" anchor="right" open={openDrawer}>
      <div className="closeX">
        <p className="base-text">Supplier1</p>
        <CloseIcon onClick={closeDrawer}/>
      </div>
      {drawerData && (
        <DrawerList data={drawerData}/>
      )}    
    </Drawer>
  )
}

export default DrawerRight;