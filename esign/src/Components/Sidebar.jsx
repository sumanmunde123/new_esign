// import React from 'react'
import './Sidebar.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import TelegramIcon from '@mui/icons-material/Telegram';
import DescriptionIcon from '@mui/icons-material/Description';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { Link } from 'react-router-dom';

const Sidebar = () => {


  return (
    <div>
      
        <div className="HomePage">
            <div className="sidebar">  
           <div className="icon">
           <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
            <select className='select'>
                <option>Suman Munde</option>
            </select>
           </div>

           <div id='selectDash' className="icon">
           <DashboardIcon className='iconi' fontSize="small" ></DashboardIcon>
           <Link style={{textDecoration:"none"}} to='/' > <div   className='names'>Dashboard</div> </Link>
           </div>

           <div className="icon">
           <AllInboxIcon className='iconi' fontSize="small" ></AllInboxIcon>
            <Link style={{textDecoration:"none"}} to='/inbox' > <div className='names'>Inbox</div></Link>
           </div>

           <div className="icon">
           <TelegramIcon className='iconi' fontSize="small" ></TelegramIcon>
            <Link style={{textDecoration:'none'}} to='/sent'><div className='names'>Sent</div></Link>
           </div>

           <div className="icon">
           <DescriptionIcon className='iconi' fontSize="small" ></DescriptionIcon>
           <Link style={{textDecoration:"none"}} to='/document'><div className='names'>Documents</div></Link>
           </div>

           <div className="icon">
           <FileCopyIcon className='iconi' fontSize="small" ></FileCopyIcon>
           <Link style={{textDecoration:"none"}} to='/template'> <div className='names'>Templates</div></Link>
           </div>


           <div className="icon2">
           <DesignServicesIcon className='iconi' fontSize="small" ></DesignServicesIcon>
            <div className='names'>Signature</div>
           </div>
            </div>


            <div className="dashboard">
                <div className='inside_i'>
                    <h2 className='dashhead'>Dashboard</h2>
                    <select className='insideselect'>
                <option>All Documents</option>
            </select>
            <select className='insideselect'>
                <option>Status</option>
            </select>
            <select className='insideselect'>
                <option>Priority</option>
            </select>
                </div>


                <div  className='inside_ii'>
   <div id='icond_T' className="icond">
           <AddIcon className='iconi' fontSize="small" ></AddIcon>
            <div className='names'>New Document</div>
           </div>

           <div className="insidedi">
           <div className="icondii">
           <FilterListIcon className='iconi' fontSize="small" ></FilterListIcon>
            <div className='names'>Filters</div>
           </div>

           <div className="icondii">
           <ImportExportIcon className='iconi' fontSize="small" ></ImportExportIcon>
            <div className='names'>Filters</div>
           </div>



           </div>
                </div>
            </div>




            {/* flexboxes */}
         <div className="filebox">
            <div className="box">
                <div className='uperpart'>
                    <div className='high'>High</div>
                </div>
                <div className='btmpart'>
                <h4 className='dashhead'>Sales Order-S093</h4>
                <AccountCircleRoundedIcon className='salesicon' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                </div>
            </div>


            <div className="box">
                <div className='uperpart'>
                <div className='high'>High</div>
                </div>
                <div className='btmpart'>
                <h4 className='dashhead'>Sales Order-S093</h4>
                <AccountCircleRoundedIcon className='salesiconi' fontSize="small" ></AccountCircleRoundedIcon>
                {/* <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon> */}
                </div>
            </div>


            <div className="box">
                <div className='uperpart'></div>
                <div className='btmpart'>
                <h4 className='dashhead'>Sales Order-S093</h4>
                <AccountCircleRoundedIcon className='salesiconii' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                {/* <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon> */}
                </div>
            </div>

            <div className="box">
                <div className='uperpart'></div>
                <div className='btmpart'>
                <h4 className='dashhead'>Sales Order-S093</h4>
                <AccountCircleRoundedIcon className='salesicon' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                </div>
            </div>

            <div className="box">
                <div className='uperpart'>
                <div className='high'>High</div>
                </div>
                <div className='btmpart'>
                <h4 className='dashhead'>Sales Order-S093</h4>
                <AccountCircleRoundedIcon className='salesiconi' fontSize="small" ></AccountCircleRoundedIcon>
                {/* <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon> */}
                </div>
            </div>

            <div className="box">
                <div className='uperpart'></div>
                <div className='btmpart'>
                <h4 className='dashhead'>Sales Order-S093</h4>
                <AccountCircleRoundedIcon className='salesiconii' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                {/* <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon> */}
                </div>
            </div>
            </div>      
        </div>
    </div>
  )
}

export default Sidebar