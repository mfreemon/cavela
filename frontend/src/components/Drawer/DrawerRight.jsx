import React from "react";
import {Drawer, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DrawerList from "../DrawerList/DrawerList";
import './drawer.scss';

const DrawerRight = ({ closeDrawer, openDrawer }) => {
  return (
    <Drawer className="drawer" anchor="right" open={openDrawer}>
      <div className="closeX">
        <p className="base-text">Supplier1</p>
        <CloseIcon onClick={closeDrawer}/>
      </div> 
      <DrawerList/>
    </Drawer>
  )
}

export default DrawerRight;