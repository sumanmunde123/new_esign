import React from 'react'
import "./TemplateForm.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import TelegramIcon from "@mui/icons-material/Telegram";
import DescriptionIcon from "@mui/icons-material/Description";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState, useEffect, useRef } from "react";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import CollectionsIcon from "@mui/icons-material/Collections";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { blue, green, red, yellow } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import pdfjsLib from "pdfjs-dist";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "pdfjs-dist/build/pdf.worker";
import { FrappeProvider, useFrappeGetDoc, useFrappeGetDocList } from 'frappe-react-sdk';


const TemplateForm = () => {

  // const {data, isLoading, error} = useFrappeGetDocList('E-Signature Template', {
  //   fields: [ 'name', 'document_type','event'], 
  //   })
  //   console.log('data', data, isLoading, error)

  const [basedOnType, setBasedOnType] = useState("doctype");
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState("");
  const [agreeBasedOn, setAgreeBasedOn] = useState('dummy');
  const [pdfCanvas, setPdfCanvas] = useState(null);

  const [htmlCode, setHtmlCode] = useState("");
  const pdfContainer = useRef(null);
 


  // popup

  const [showPopup, setShowPopup] = useState(false);

  // drop popup
  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [draggedItemType, setDraggedItemType] = useState('');


 

  const signatureCanvas = useRef(null);

 





  // create a drag and add text values in empty box


  const [isDragging, setIsDragging] = useState(false);
  const [dropPosition, setDropPosition] = useState({ x: 0, y: 0 });
  



  const handleButtonClick = () => {
    setShowPopup(true);
   
  };

  const handleDragStart = (e, type) => {
    setIsDragging(true);

    // Store the mouse position when the drag event starts
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDropPosition({ x, y });
    setDraggedItemType(type);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const pdfPreview = document.querySelector("#pdf-preview");
    const rect = pdfPreview.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Ensure the drop position stays within the boundaries of the PDF preview
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));

    setDropPosition({ x, y });

  
    setPopupText('');
    setPopup(true);
  };


  // canvas drawing

  const handleDrawSignature = (e) => {
    const canvas = signatureCanvas.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = 'black'; // Set the stroke color (you can customize this)
    context.lineWidth = 2; // Set the line width (you can customize this)
  
    if (e.type === 'mousedown' || e.type === 'touchstart') {
      context.beginPath();
    }
  
    // Check if touch events are available in the event object
    if (e.nativeEvent.touches && e.nativeEvent.touches.length > 0) {
      context.lineTo(
        e.nativeEvent.touches[0].pageX,
        e.nativeEvent.touches[0].pageY
      );
    } else {
      context.lineTo(
        e.nativeEvent.offsetX || e.nativeEvent.pageX,
        e.nativeEvent.offsetY || e.nativeEvent.pageY
      );
    }
  
    if (e.type === 'mouseup' || e.type === 'touchend') {
      context.stroke();
    }
  };
  

  
  





  const handleSavePopup = () => {
    // Save the text from the popup
    if (popupText) {
      const pdfSpace = document.querySelector('.pdfspace');
      const newDiv = document.createElement('div');
      newDiv.classList.add('newdiv');
      newDiv.style.top = `${dropPosition.y}px`;
      newDiv.style.left = `${dropPosition.x}px`;

      // Check the type of the dragged item and create the appropriate content
      if (draggedItemType === 'text') {
        newDiv.innerText = popupText;
      } else if (draggedItemType === 'canvas') {
        const canvasToImage = new Image();
        canvasToImage.src = signatureCanvas.current.toDataURL(); 
        newDiv.appendChild(canvasToImage); 

      } else if (draggedItemType === 'input') {
  
        newDiv.innerText = popupText;

      }
      else if(draggedItemType === 'phone'){
        newDiv.innerText = popupText;
      }
      else if(draggedItemType === 'check'){
        const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = 'checked'
      newDiv.appendChild(checkbox);
      newDiv.appendChild(document.createTextNode(''));
      }
      else if(draggedItemType === 'date'){
        newDiv.innerText = popupText;
      }

      pdfSpace.append(newDiv);
      setPopup(false);
    }
  };


  const handleCancelPopup = () => {
    // Close the popup without saving
    setPopup(false);
  };




 

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    setPdfPreviewUrl(URL.createObjectURL(file));
    setShowPopup(false);
  };



useEffect(() => {
  if (pdfPreviewUrl && pdfCanvas) {
    const canvas = pdfCanvas;
    const context = canvas.getContext("2d");
    const scale = 1.5;

    window.pdfjsLib.getDocument(pdfPreviewUrl).promise.then(function (pdfDoc_) {
      const pdfDoc = pdfDoc_;
      const numPages = pdfDoc.numPages;
      let pageNum = 1;

      function renderPage(num) {
        pdfDoc.getPage(num).then(function (page) {
          const viewport = page.getViewport({ scale });
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          page.render(renderContext);
        });
      }

      renderPage(pageNum);
    });
  }
 
  
}, [pdfPreviewUrl, pdfCanvas]);



useEffect(() => {

  if (htmlCode) {
    html2canvas(pdfContainer.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a new PDF document
      const pdf = new jsPDF("p", "mm", "a4");

      // Add the captured image to the PDF
      // pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // Adjust dimensions as needed

      // Save or display the PDF
      // pdf.save("generated.pdf");

    });
 
  }
  


}, [htmlCode])





// Fetch data from backend 





  return (
    <div>
      <FrappeProvider>
      <div className="mainline">New Template Form</div>
      <div className="template">
        {/* sideicons */}
        <div className="sideicon">
          <AccountCircleRoundedIcon
            className="temp_icon"
            fontSize="medium"
          ></AccountCircleRoundedIcon>
          <Link style={{color:'black'}} to='/'>
          <DashboardIcon
            className="temp_icon"
            fontSize="medium"
          ></DashboardIcon>
          </Link>
          <Link style={{color:'black'}}  to='/inbox'>
          <AllInboxIcon className="temp_icon" fontSize="medium"></AllInboxIcon></Link>
          <Link style={{color:'black'}}  to='/sent'>
          <TelegramIcon className="temp_icon" fontSize="medium"></TelegramIcon></Link>
          <Link style={{color:'black'}}  to='/document'>
          <DescriptionIcon
            className="temp_icon"
            fontSize="medium"
          ></DescriptionIcon></Link>
         <Link style={{color:'black'}}  to='/template'>
          <FileCopyIcon className="temp_icon" fontSize="medium"></FileCopyIcon></Link>
          <DesignServicesIcon
            className="temp_iconi"
            fontSize="medium"
          ></DesignServicesIcon>
        </div>

        {/* input fields */}

        <div className="templateinput">
          <p className="lables">Name</p>
          {
          
          }
            
              <input className="inputf" ></input>
        
   
          
          <br />
          <p className="lables">Based On</p>
          <select
            className="inputf"
            onChange={(e) => setBasedOnType(e.target.value)}
          >
            <option value="doctype">Doctype File</option>
            <option value="pdf">Pdf File</option>
          </select>
          <br></br>
          {basedOnType == "doctype" && (
            <>
              <p className="lables">Doctype</p>
              <input className="inputf"></input>
              <br></br>
              <p className="lables">Trigger On</p>
              <select className="inputf">
              <option value="">Choose Option</option>
              </select>
              <br></br>
              <p className="lablesi">Agreement Based On</p>
              <select className="inputf" 
              
              onChange={(e) => setAgreeBasedOn(e.target.value)}>
                <option value="dummy">Choose Option</option>
                <option value="html">HTML Format</option>
                <option value="print">Print Format</option>
              </select>
              <br></br>
              {
                agreeBasedOn == 'print' && (
                  <>
                    <p className="lables">Print Format</p><input className="inputf"></input>
                  </>
                )
              }
            
              {
                agreeBasedOn == 'html' && (
                  <><textarea  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)} placeholder='Type Something here...' name="" id="htmlFormat"  
 >

                  </textarea></>
                )
              }
            </>
          )}

          {/* pdf button */}

            <div className="pdfbtn">
            <button className="pbtn" onClick={handleButtonClick}>
              Attach Pdf
            </button>
          </div>
          
          {/* condition box */}
          <div className="text">Condition</div>
          <div className="condition"></div>
        </div>

        {/* drag icons */}

        <div className="dragicons">
       
<div></div>
<br></br>
          <div  className="smallboxes">
            <div  draggable
              onDragStart={(e) => handleDragStart(e, 'text')}
              onDragEnd={handleDragEnd} id='first' className="insideiconbox">
              <DesignServicesIcon
                className="iconzoom"
                fontSize="small"
              ></DesignServicesIcon>
            </div>
            <div
              className="insideiconbox"
              id='second'
              draggable
              onDragStart={(e) => handleDragStart(e, 'input')}
              onDragEnd={handleDragEnd}
            >
              <AttachEmailIcon
                className="iconzoom"
                fontSize="small"
              ></AttachEmailIcon>
            </div>
            <div className="insideiconbox" id='third' draggable
              onDragStart={(e) => handleDragStart(e, 'canvas')}
              onDragEnd={handleDragEnd}>
              <DriveFileRenameOutlineIcon
                className="iconzoom"
                fontSize="small"
              ></DriveFileRenameOutlineIcon>
            </div>
            <div className="insideiconbox" draggable
              onDragStart={(e) => handleDragStart(e, 'phone')}
              onDragEnd={handleDragEnd}>
              <LocalPhoneIcon
                className="iconzoom"
                fontSize="small"
              ></LocalPhoneIcon>
            </div>
            <div className="insideiconbox" draggable
              onDragStart={(e) => handleDragStart(e, 'input')}
              onDragEnd={handleDragEnd}>
              <DriveFileRenameOutlineIcon
                className="iconzoom"
                fontSize="small"></DriveFileRenameOutlineIcon>
            </div>
            <div className="insideiconbox" draggable
              onDragStart={(e) => handleDragStart(e, 'check')}
              onDragEnd={handleDragEnd}>
              <SelectAllIcon
                className="iconzoom"
                fontSize="small"
              ></SelectAllIcon>
            </div>
            <div className="insideiconbox" draggable
              onDragStart={(e) => handleDragStart(e, 'date')}
              onDragEnd={handleDragEnd}>
              <DateRangeIcon
                className="iconzoom"
                fontSize="small"
              ></DateRangeIcon>
            </div>
          </div>
        </div>

        {/* pdf add space */}

        <div 
           className="pdfspace">

            <div ref={pdfContainer}
          dangerouslySetInnerHTML={{ __html: htmlCode }}
          onDrop={handleDrop}
            onDragOver={handleDragOver}
             ></div>
          {/* <iframe
            style={{
              width: "100%",
              height: "100%",
            }}
            id="pdf-preview"
            src={pdfPreviewUrl}
          ></iframe> */}
         {
          !htmlCode &&  (
            <canvas
            id="pdf-preview"
          ref={(canvas) => setPdfCanvas(canvas)}
          style={{ width: "100%", height: "100%" }}
        ></canvas>
          )
         }


          <div
            className="uppercontent"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          ></div>

         
        </div>

        {/* signin pdf */}

        <div className="addpdf">
          <div className="signbtn">
           <Link to='/document'> <button className="sbtn">Prepare Sign Request</button></Link>
          </div>

          <div className="assignpdfto">
            <div className="selectassignee">
              <div id="field">Field</div>
              <div id="people">People</div>
            </div>
        

            <p className="fieldlable">Data Key/ Field Title</p>
            <input
              className="fieldinput"
              type="text"
              placeholder="Notes Here"
            />
            <div className="check_field">
              <input className="fieldcheck" type="checkbox" />
              <p className="fieldpara">Allow Sender to Prefill</p>
            </div>
            <p className="fieldlable">Placeholder Text</p>
            <input
              className="fieldinput"
              type="text"
              placeholder="Put any notes here"
            />
            <div className="check_field">
              <input className="fieldcheck" type="checkbox" />
              <p className="fieldpara">Multiline</p>
            </div>
            <div className="check_fieldi">
              <input className="fieldcheck" type="checkbox" />
              <p className="fieldpara">Required Field</p>
            </div>
            <p className="lable_two">Character Limit</p>
            <div className="emptyfield">
              <div className="emptyF"></div>
              <div className="emptyFtwo">
                <p>Clear</p>
              </div>
            </div>
            <p className="lable_two">Border Thickness</p>
            <div className="emptyfield">
              <div className="emptyF"></div>
              <div className="emptyFtwo">
                <p>Clear</p>
              </div>
            </div>

            <p className="lable_two">Character Limit</p>
            <div id="emptyfield" className="emptyfield">
              <div className="emptyF"></div>
              <div className="emptyFtwo">
                <p>Clear</p>
              </div>
            </div>

            <p className="lable_two">Assignee</p>
            <button className="assigneebtn">Not Assigned</button>
          </div>
        </div>
      </div>

      {popup && (
          <div className="selectpdf-popup">
     <h4>Enter Text</h4>
           <div className="popupArea">
            {/* Render different input elements based on the type of dragged item */
            draggedItemType === 'text' ? (
              <textarea
                value={popupText}
                onChange={(e) => setPopupText(e.target.value)}
                placeholder="Enter text here"
              />
            ) : draggedItemType === 'canvas' ? (
               <canvas
               ref={signatureCanvas}
               width="300" // Customize the width as needed
               height="150" // Customize the height as needed
               onMouseDown={handleDrawSignature}
               onMouseMove={handleDrawSignature}
               onMouseUp={handleDrawSignature}
               onTouchStart={handleDrawSignature}
               onTouchMove={handleDrawSignature}
               onTouchEnd={handleDrawSignature}
        ></canvas>
            ) : draggedItemType === 'input' ? (
              <input value={popupText}
              onChange={(e) => setPopupText(e.target.value)} type="email"  placeholder="Enter Your Email" />
            ) : draggedItemType === 'phone' ? ( <input type='number'  placeholder='Enter Your Mobile Number' value={popupText} onChange={(e) => setPopupText(e.target.value)}/> )
            : draggedItemType === 'check' ? (  <input
              type="checkbox"
              checked={popupText}
              onChange={(e) => setPopupText(e.target.checked)}
            />)
            : draggedItemType === 'date' ? ( <input type='date'  placeholder='Add Date' value={popupText} onChange={(e) => setPopupText(e.target.value)}/> )  
            
            : null}
          
             {/* <textarea
              value={popupText}
              onChange={(e) => setPopupText(e.target.value)}
              placeholder="Enter text here"
            /> */}
           </div>
            <div className="popup-buttons">
              <button onClick={handleSavePopup}>Save</button>
              <button onClick={handleCancelPopup}>Cancel</button>
            </div>
          </div>
        )}

        

      {showPopup && (
        <div className="selectpdf-popup">
          <h5>Upload</h5>
        <div className="closeiconpop">
      <CloseIcon  onClick={() => setShowPopup(false)}
          className="cls"  fontSize="small"  sx={{ color: blue[500] }}>
        
         </CloseIcon> 
      
        </div>
          <div className="allpdficons">
            <p>upload files here from</p>
            <div className="flexicons">
              <input
                onChange={handleUploadFile}
                type="file"
                hidden
                id="fileInput"
                accept=".pdf"
              />
              <label htmlFor="fileInput">
                {" "}
                <AddToQueueIcon
                  className="getpdficon"
                  color="secondary"
                  fontSize="medium"
                >
                  <div> </div>
                </AddToQueueIcon>
              </label>
              <CollectionsIcon
                className="getpdficon"
                sx={{ color: green[500] }}
                fontSize="medium"
              >
                <div> </div>
              </CollectionsIcon>
              <AttachFileIcon
                className="getpdficon"
                sx={{ color: yellow[500] }}
                fontSize="medium"
              >
                <div> </div>
              </AttachFileIcon>
              <AddAPhotoIcon
                className="getpdficon"
                sx={{ color: red[500] }}
                fontSize="medium"
              >
                <div> </div>
              </AddAPhotoIcon>
            </div>
          </div>
        
        </div>
      )}
      </FrappeProvider>
    </div>
  );
};

export default TemplateForm;