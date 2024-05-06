// import { useEffect } from 'react'
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

const Document = () => {

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

           <div  className="icon">
           <DashboardIcon className='iconi' fontSize="small" ></DashboardIcon>
           <Link style={{textDecoration:"none"}} to='/'> <div  className='names'>Dashboard</div></Link>
           </div>

           <div className="icon">
           <AllInboxIcon className='iconi' fontSize="small" ></AllInboxIcon>
           <Link style={{textDecoration:"none"}} to='/inbox'><div className='names'>Inbox</div></Link>
           </div>

           <div className="icon">
           <TelegramIcon className='iconi' fontSize="small" ></TelegramIcon>
           <Link style={{textDecoration:"none"}} to='/sent'><div className='names'>Sent</div></Link>
           </div>

           <div  id='selectDash' className="icon">
           <DescriptionIcon className='iconi' fontSize="small" ></DescriptionIcon>
           <Link style={{textDecoration:"none"}}  to='/document'><div className='names'>Documents</div></Link>
           </div>

           <div className="icon">
           <FileCopyIcon className='iconi' fontSize="small" ></FileCopyIcon>
           <Link style={{textDecoration:"none"}}  to='/template'><div className='names'>Templates</div></Link>
           </div>


           <div className="icon2">
           <DesignServicesIcon className='iconi' fontSize="small" ></DesignServicesIcon>
            <div className='names'>Signature</div>
           </div>
            </div>


            <div className="dashboard">
                <div className='inside_i'>
                    <h2 className='dashhead'>Documents</h2>
                    <div className="icond">
           <AddIcon className='iconi' fontSize="small" ></AddIcon>
           <Link style={{textDecoration:"none"}} to='/templateform'><div  className='namest'>New Document</div></Link>
           </div>
                </div>


                <div  className='inside_ii'>
   

           <div className="insidedi">
           <div className="icondii_t">
           <FilterListIcon className='iconi' fontSize="small" ></FilterListIcon>
            <div className='names'>Filter</div>
           </div>

           <div className="icondii_t">
           <ImportExportIcon className='iconi' fontSize="small" ></ImportExportIcon>
            <div className='names'>Sort</div>
           </div>



           </div>
                </div>
            </div>




            {/* flexboxes */}
         {/* <div className="filebox_T">
            <div className="box_t">
               
            </div>


            <div className="box_t">
              
            </div>


            <div className="box_t">
                
            </div>
           <div className="send_btn">
           <button className='btni_i'>Send</button>
            <button className='btni'>Send</button>
            <button className='btni'>Send</button>

           </div>
           

          
           
            </div>       */}

            <div className='filebox_T'>
              <div className="temp_boxD">

                <div style={{height:"44%"}} className='temp_box_top'>
                <div className='high'>High</div>
                <p>Template ID #8265</p>
                </div>
                <div className="temp_box_btm">
                  <h2>Sales Order:S093</h2>
                  <AccountCircleRoundedIcon  className='salesicon' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                </div>
              </div>
              <div className="temp_boxD">
              <div style={{height:"46%"}} className='temp_box_top'>
              <div className='high'>High</div>
              </div>
                <div className="temp_box_btm">
                  <h2>Sales Order:S093</h2>
                  <AccountCircleRoundedIcon className='salesiconi' fontSize="small" ></AccountCircleRoundedIcon>
                {/* <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon> */}
                </div>
              </div>
              <div className="temp_boxD">
              <div className='temp_box_top'></div>
                <div className="temp_box_btm">
                  <h2>Sales Order:S093</h2>
                  <AccountCircleRoundedIcon className='salesiconii' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                </div>
              </div>
              <div className="temp_boxD">
              <div className='temp_box_top'></div>
                <div className="temp_box_btm">
                  <h2>Sales Order:S093</h2>
                  <AccountCircleRoundedIcon className='salesiconi' fontSize="small" ></AccountCircleRoundedIcon>
                {/* <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
                <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon> */}
                </div>
              </div>
              <div className="sendBtnD"><button>Send</button></div>
              <div className="sendBtnD"><button>Send</button></div>
              <div className="sendBtnD"><button>Send</button></div>
              <div className="sendBtnD"><button>Send</button></div>
             

            </div>


        </div>
    </div>
  )
}

export default Document;