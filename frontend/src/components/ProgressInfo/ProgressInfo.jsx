import './progress.scss'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';

const ProgressInfo = ({next}) => {
  return(
    <section className="progress">
      <div className='info first-step'>
        <div className='symbol'><PersonIcon/></div>
        <div>
          <span>Identified <a>115</a> best matched out of 2,081,201 suppliers</span>
          <span>We searched for suppliers that match your exact product requirement and location.</span>
        </div>
      </div>
      <span className={`divider ${next ? 'next-step': null}`}></span>
      <div className={`info ${next ? 'next-step': null}`}>
        <div className='symbol'><SendIcon/></div>
        <div>
          <span>Reaching out to suppliers</span>
          <span>We shared your product info with match suppliers to understand their interest.</span>
        </div>
      </div>
      <span className='divider'></span>
      <div className='info'>
        <div className='symbol'><ChatIcon/></div>
        <div>
          <span>Engaging Suppliers</span>
          <span>We communicated with interested suppliers to verify their terms to prep for quotes.</span>
        </div>
      </div>
      <span className='divider'></span>
      <div className='info'>
        <div className='symbol'><AttachMoneyIcon/></div>
        <div>
          <span>Received Quotes</span>
          <span>We received detailed qoutes that are ready for you to select</span>
        </div>  
      </div>  
    </section>
  )
}

export default ProgressInfo;