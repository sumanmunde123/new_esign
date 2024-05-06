
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Home from './Home'
import Sidebar from './Components/Sidebar';
import Template from './Components/Template';
// import TemplateForm from './Components/TemplateForm';
import Inbox from './Components/Inbox';
import Sent from './Components/Sent';
import Document from './Components/Document';
import Test from './Components/Test';
import TemplateForm from './Components/TemplateForm';


function App() {
  
  return (
	<div>
	  <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''} >
		<BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
		<Routes>
			<Route path='/' element={<Sidebar />}/>
			
        <Route path='/document' index element={<Document />}/> 
        <Route path='/templateform' index element={<TemplateForm />} />
		<Route path='/inbox'  element={<Inbox />} />
		<Route path='/sent' element={<Sent />}/>

		
		<Route path='/test'  element={<Test />} />
		<Route  path="/template"  index element={<Template />}/>

		</Routes>
		
		</BrowserRouter>
		
	  </FrappeProvider>
	</div>
  )
}

export default App
