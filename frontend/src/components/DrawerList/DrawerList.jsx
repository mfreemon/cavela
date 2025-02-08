import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './drawerlist.scss';

const style = {
  py: 0,
  width: '100%',
  // borderRadius: 2,
  // border: '1px solid',
  borderColor: 'divider',
  // backgroundColor: 'background.paper',
};

const DrawerList = ()  => {
  return (
    <div className="drawer-list">
      <List sx={style}>
        <h3>Product</h3>
        <ListItem>
          <span>Variant</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>EXW UNit Price</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>DDP Unit Price</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Production Time</span>
          <span>Denim</span>
        </ListItem>
        <ListItem>
          <span>Shipping Time</span>
          <span>Denim</span>
        </ListItem>
        <ListItem>
          <span>Method</span>
          <span>Denim</span>
        </ListItem>
        <ListItem>
          <span>Payment Terms</span>
          <span>Denim</span>
        </ListItem>
      </List>
      <List sx={style}>
        <h3>Sample</h3>
        <ListItem>
          <span>Sample Cost</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Shipping Cost</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Production Time</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Shipping Timet</span>
          <span>Denim</span>        
        </ListItem>
      </List>
      <List sx={style}>
        <h3>Supplier Details</h3>
        <ListItem>
          <span>Ratings</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Review</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Notes</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
       </List>
       <List>
        <h3>References</h3> 
        <ListItem>
          <span>Variant</span>
          <span>Denim</span>        
        </ListItem>
        <Divider variant="middle" component="li" />
      </List>
    </div> 
    
  );
}

export default DrawerList;
