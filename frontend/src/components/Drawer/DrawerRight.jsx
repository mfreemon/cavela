import React from "react";
import {Drawer, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './drawer.scss';

const DrawerRight = ({ closeDrawer, openDrawer }) => {
  return (
    <Drawer className="drawer" anchor="right" open={openDrawer}>
      <div className="closeX">
        <h2>Supplier1</h2>
        <CloseIcon onClick={closeDrawer}/>
      </div> 
      <div className="inner">
        <h1>comsthing</h1>
        <h1>comsthing</h1>
        <h1>comsthing</h1>
        <h1>comsthing</h1> 
      </div> 
    </Drawer>
  
  )
}

export default DrawerRight;