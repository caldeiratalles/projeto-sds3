import Dashboard from 'components/pages/Dashboard';
import Home from 'components/pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';




const RoutesConfig = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/dashboard" element={ <Dashboard /> }/>                 
        </Routes>
        </BrowserRouter>
    );
  }
  
  export default RoutesConfig;