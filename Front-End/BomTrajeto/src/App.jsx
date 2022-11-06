import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Clientes from "./Pages/Clientes";
import ClientesCreate from "./Pages/Clientes/Create";
import Destinos from "./Pages/Destinos";
import DestinosCreate from "./Pages/Destinos/Create";



function App() {
	return (
		<div ClassName="App">
		<Router>
			<Header />
			<Footer />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Clientes-Create" element={<ClientesCreate />} />
        <Route path="/Clientes-Update/:id" element={<ClientesCreate />} />
      	<Route path="/Destinos" element={<Destinos />} />
        <Route path="/Destinos-Create" element={<DestinosCreate />} />
        <Route path="/Destinos-Update/:id" element={<DestinosCreate />} />
      </Routes>
    </Router>
			
				
		
		
		</div>
	)
}

export default App
