const TableBody = ({ data, selectSupplier, openDrawer }) => {
  const truncateString = (str) => {
    return str.length > 10 ? str.slice(0, 10) + "..." : str;
  }
  return (
    <>
      {data.map((supplierData, index) => {
        if (supplierData.recommended == true){
          return (    
            <tbody key={index} >
              <div className='recommend'>
                <span className='cavela'><img src={Star1}/><img src={Star2}/>Cavela Recommended</span>
                {supplierData.product_quotes.map((quote) => (  
                <tr className="rec" key={quote.id} onClick={() => {openDrawer(true) ,selectSupplier(supplierData, quote.id)}}>
                  <td className='supplier'>{supplierData.supplier.supplier_cloak}</td>
                  <td className='prod-name'>{truncateString(quote.product_name)}</td>
                  <td>{quote.exw_unit_price_marked_up}</td>
                  <td className='hide'>{quote.quantity}</td>
                  <td className='hide'>{quote.production_time_days} Days</td>
                  <td className='rating hide'>{supplierData.supplier.average_score}<StarIcon /></td>
                  <td className='hide'><span className='review'>Best Value</span></td>
                  <td className='files hide'>{quote.files?.length || 0}<InsertDriveFileIcon /></td>
                  <td className='radio hide'><PanoramaFishEyeIcon/>Not Purchased</td>
                </tr>
                ))}
              </div>
            </tbody>
          )} else {
          return (
            <tbody key={index} >
              <div style={{'backgroundColor':'light-green'}}>
                {supplierData.product_quotes.map((quote) => (   
                <tr className="non-rec" key={quote.id} onClick={() => {openDrawer(true), selectSupplier(supplierData, quote.id)}}>
                  <td className='supplier'>{supplierData.supplier.supplier_cloak}</td>
                  <td className='prod-name'>{truncateString(quote.product_name)}</td>
                  <td>{quote.exw_unit_price_marked_up}</td>
                  <td className='hide'>{quote.quantity}</td>
                  <td className='hide'>{quote.production_time_days} Days</td>
                  <td className='rating hide'>{supplierData.supplier.average_score}<StarIcon /></td>
                  <td className='hide'><span className='review'>Best Value</span></td>
                  <td className='files hide'>{quote.files?.length || 0}<InsertDriveFileIcon /></td>
                  <td className='radio hide'><PanoramaFishEyeIcon/>Not Purchased</td>
                </tr>
              ))}
            </div>
          </tbody>
          )
        }
      })}
    </>
  );
};




import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import StarIcon from '@mui/icons-material/Star';
import Star1 from '../../assets/star1.svg';
import Star2 from '../../assets/star2.svg';
import './table.scss';

const columnNames = ['VARIANT', 'UNIT PRICE', 'QUANTITY', 'PRODUCTION TIME', 'RATINGS', 'REVIEW', 'FILES', 'STATUS']

const CavTable = ({data, selectSupplier, open}) => {
  return (
    <div>
      <table className="table" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            {columnNames.map((col, i) => (
              <th key={i}>{col}{<InfoIcon/>}</th>
            ))}
          </tr>
        </thead>
        <TableBody data={data} selectSupplier={selectSupplier} openDrawer={open}/>
      </table>
    </div>
  );
};

export default CavTable;


