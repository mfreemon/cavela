
import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import StarIcon from '@mui/icons-material/Star';
import './table.scss';

const columnNames = ["", 'VARIANT', 'UNIT PRICE', 'QUANTITY', 'PRODUCTION TIME', 'RATINGS', 'REVIEW', 'FILES', 'STATUS']

const CavTable = ({data, selectSupplier}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columnNames.map((col, i) => (
              <th key={i}>{col}{i!== 0 ? <InfoIcon/> : null}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((supplierData, index) => (
            supplierData.product_quotes.map((quote, q) => (
            <tr key={index} onClick={() => selectSupplier(supplierData, quote.id)}>
              <td className='supplier'>{supplierData.supplier.supplier_cloak}</td>
              <td>{quote.product_name}</td>
              <td>{quote.exw_unit_price_marked_up}</td>
              <td>{quote.quantity}</td>
              <td>{quote.production_time_days} Days</td>
              <td className='rating'>{supplierData.supplier.average_score}<StarIcon/></td>
              <td ><span className='review'>Best Value</span></td>
              <td className='files'>{quote.files.length}<InsertDriveFileIcon/></td>
              <td>Not Purchased</td>
            </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CavTable;


