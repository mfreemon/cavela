import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import StarIcon from '@mui/icons-material/Star';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Star1 from '../../assets/star1.svg';
import Star2 from '../../assets/star2.svg';


import './drawerlist.scss';

const style = {
  py: 0,
  width: '100%',
  borderColor: 'divider',
};

const FilesList = ({files}) => {
  if(files.length >=1){
    return (
      files.map((file, indesx) => (
        <div className='file-info'>
          <div><InsertDriveFileIcon></InsertDriveFileIcon></div>
          <div>
            <span> {file.name}</span>
            <span>{file.description}</span>
          </div>
        </div>
      ))
    )
  } else {
    return (
      <span>N/A</span>
    )
  }  
}

const DrawerList = ({data})  => {
  console.log(data)
  const {
    product_name, 
    exw_unit_price_marked_up, 
    ddp_unit_price_marked_up,
    production_time_days, 
    quantity,
    shipping_time_days,
    sample_cost_marked_up,
    sample_shipping_cost_marked_up,
    sample_production_time_days,
    sample_shipping_time_days
  } = data.item
  return (
    <div className={`drawer-list ${data.supplier?.recommended ? 'rec': 'non-rec'}`}>
      {data.supplier.recommended && <span className='rec-tag'><img src={Star1}/><img src={Star2}/>Cavella Recommended</span>}
      <List sx={style}>
        <ListItem>
          <span>Status</span>
          <span className='circle'><PanoramaFishEyeIcon/>Not Purchased</span>
        </ListItem>
      </List>  
      <List sx={style}>
        <h3>Product</h3>
        <ListItem>
          <span>Variant<InfoIcon/></span>
          <span>{product_name}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>EXW UNit Price<InfoIcon/></span>
          <span>${exw_unit_price_marked_up}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>DDP Unit Price<InfoIcon/></span>
          <span>From ${ddp_unit_price_marked_up}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Quantity</span>
          <span>{quantity}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Production Time<InfoIcon/></span>
          <span>{production_time_days} Days</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Shipping Time<InfoIcon/></span>
          <span>{shipping_time_days} Days</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Method<InfoIcon/></span>
          <span>Air</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Payment Terms</span>
          <span>50% upfront, %50 after reception</span>
        </ListItem>
      </List>
      <List sx={style}>
        <h3>Sample</h3>
        <ListItem>
          <span>Sample Cost<InfoIcon/></span>
          <span>${sample_cost_marked_up}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Shipping Cost<InfoIcon/></span>
          <span>${sample_shipping_cost_marked_up}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Production Time</span>
          <span>{sample_production_time_days}</span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Shipping Time</span>
          <span>20 Days</span>        
        </ListItem>
      </List>
      <List sx={style}>
        <h3>Supplier Details</h3>
        <ListItem>
          <span>Ratings<InfoIcon/></span>
          <span className='rating'>{data.supplier.supplier.average_score}<StarIcon /></span>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem className="review-container">
          <span>Review<InfoIcon/></span>
            {data.supplier?.recommended ?
              <span className='review'>
                <span>Best Value</span>
                <span>Fastest</span>
              </span>        
                :
              <span>N/A</span>}
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <span>Notes</span>
          <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </ListItem>
        <Divider variant="middle" component="li" />
       </List>
       <List>
        <h3>References</h3> 
        <ListItem>
          <span>Files</span>
          <FilesList files={data?.item?.files} />    
        </ListItem>
        <Divider variant="middle" component="li" />
      </List>
    </div> 
    
  );
}

export default DrawerList;
