import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';

import './drawerlist.scss';

const style = {
  py: 0,
  width: '100%',
  borderColor: 'divider',
};

const DrawerList = ({data})  => {
  console.log(data)
  return (
    <div className="drawer-list">
      <List sx={style}>
        <h3>Product</h3>
        <ListItem>
          <span>Variant<InfoIcon/></span>
          <span>{data.item.product_name}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>EXW UNit Price<InfoIcon/></span>
          <span>${data.item.exw_unit_price_marked_up}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>DDP Unit Price<InfoIcon/></span>
          <span>From ${data.item.ddp_unit_price_marked_up}</span>
        </ListItem>
        <ListItem>
          <span>Quantity</span>
          <span>{data.item.quantity}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Production Time<InfoIcon/></span>
          <span>{data.item.production_time_days} Days</span>
        </ListItem>
        <ListItem>
          <span>Shipping Time<InfoIcon/></span>
          <span>{data.item.shipping_time_days} Days</span>
        </ListItem>
        <ListItem>
          <span>Method<InfoIcon/></span>
          <span>Air</span>
        </ListItem>
        <ListItem>
          <span>Payment Terms</span>
          <span>50% upfront, %50 after reception</span>
        </ListItem>
      </List>
      <List sx={style}>
        <h3>Sample</h3>
        <ListItem>
          <span>Sample Cost<InfoIcon/></span>
          <span>{data.item.sample_cost_marked_up}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Shipping Cost<InfoIcon/></span>
          <span>{data.item.sample_shipping_cost_marked_up}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Production Time</span>
          <span>Denim</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Shipping Timet</span>
          <span>{data.item.sample_production_time_days}</span>        
        </ListItem>
      </List>
      <List sx={style}>
        <h3>Supplier Details</h3>
        <ListItem>
          <span>Ratings<InfoIcon/></span>
          <span>{data.supplier.supplier.average_score}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Review<InfoIcon/></span>
          <span>N/A</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Notes</span>
          <span></span>
        </ListItem>
        <Divider variant="middle" component="li" />
       </List>
       <List>
        <h3>References</h3> 
        <ListItem>
          <span>Files</span>
          <span></span>        
        </ListItem>
        <Divider variant="middle" component="li" />
      </List>
    </div> 
    
  );
}

export default DrawerList;
